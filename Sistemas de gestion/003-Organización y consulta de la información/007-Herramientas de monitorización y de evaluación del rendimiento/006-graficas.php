
<?php
$archivo = "/home/andrei/log/registros.csv";

$fechas = [];
$cpu = [];
$ram = [];
$disco = [];

if (is_readable($archivo) && ($f = fopen($archivo, "r")) !== false) {

    // Saltar cabecera
    fgetcsv($f, 1000, ",");

    while (($fila = fgetcsv($f, 1000, ",")) !== false) {
        if (count($fila) < 4) continue;

        $fechas[] = $fila[0];
        $cpu[] = (float)$fila[1];
        $ram[] = (float)$fila[2];
        $disco[] = (float)$fila[3];
    }

    fclose($f);
}

$actualCPU = count($cpu) ? end($cpu) : 0;
$actualRAM = count($ram) ? end($ram) : 0;
$actualDisco = count($disco) ? end($disco) : 0;
?>

<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="refresh" content="60">
<title>Monitor del sistema</title>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

<style>
* {
    box-sizing: border-box;
}

body {
    margin: 0;
    padding: 20px;
    background: #111827;
    color: #eff6ff;
    font-family: Arial, sans-serif;
}

h1 {
    margin: 0 0 20px;
    font-size: 24px;
}

.grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-template-rows: repeat(2, minmax(0, 1fr));
    gap: 16px;
    height: calc(100vh - 90px);
}

.panel {
    background: #111827;
    border: 1px solid #1e40af;
    border-radius: 12px;
    padding: 18px;
    min-height: 0;
    display: flex;
    flex-direction: column;
}

.panel h2 {
    margin: 0 0 12px;
    font-size: 17px;
    font-weight: 500;
}

.grafica {
    position: relative;
    flex: 1;
    min-height: 0;
}

canvas {
    width: 100% !important;
    height: 100% !important;
}

@media (max-width: 900px) {
    .grid {
        grid-template-columns: 1fr;
        grid-template-rows: none;
        height: auto;
    }

    .panel {
        height: 270px;
    }
}
/* paleta-andrei */:root{--naranja:#f97316;--azul:#1d4ed8;--azul-medio:#1e40af;--azul-claro:#eff6ff;--azul-palido:#dbeafe;--blanco:#ffffff;--negro:#111827;--radio:12px}:where(button,input,select,textarea,fieldset,img,video,canvas,iframe,table,pre,dialog,details,article,section,aside,nav a,[class*="card"],[class*="tarjeta"],[class*="panel"],[class*="caja"],[class*="boton"],[class*="btn"],[class*="widget"],[class*="modal"]){border-radius:var(--radio)}</style>
</head>

<body>

<h1>Monitor de recursos del sistema</h1>

<div class="grid">

    <div class="panel">
        <h2>Histórico CPU</h2>
        <div class="grafica">
            <canvas id="cpuLinea"></canvas>
        </div>
    </div>

    <div class="panel">
        <h2>Histórico RAM</h2>
        <div class="grafica">
            <canvas id="ramLinea"></canvas>
        </div>
    </div>

    <div class="panel">
        <h2>Histórico disco</h2>
        <div class="grafica">
            <canvas id="discoLinea"></canvas>
        </div>
    </div>

    <div class="panel">
        <h2>CPU actual</h2>
        <div class="grafica">
            <canvas id="cpuGauge"></canvas>
        </div>
    </div>

    <div class="panel">
        <h2>RAM actual</h2>
        <div class="grafica">
            <canvas id="ramGauge"></canvas>
        </div>
    </div>

    <div class="panel">
        <h2>Disco actual</h2>
        <div class="grafica">
            <canvas id="discoGauge"></canvas>
        </div>
    </div>

</div>

<script>
const fechas = <?php echo json_encode($fechas); ?>;
const cpu = <?php echo json_encode($cpu); ?>;
const ram = <?php echo json_encode($ram); ?>;
const disco = <?php echo json_encode($disco); ?>;

const actualCPU = <?php echo json_encode($actualCPU); ?>;
const actualRAM = <?php echo json_encode($actualRAM); ?>;
const actualDisco = <?php echo json_encode($actualDisco); ?>;

Chart.defaults.color = "#1d4ed8";
Chart.defaults.borderColor = "#1e40af";

// GRÁFICAS HISTÓRICAS

function crearLinea(id, datos, color) {
    new Chart(document.getElementById(id), {
        type: "line",
        data: {
            labels: fechas,
            datasets: [{
                label: "Uso (%)",
                data: datos,
                borderColor: color,
                backgroundColor: color + "25",
                fill: true,
                tension: 0.3,
                pointRadius: 0,
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: false,
            interaction: {
                intersect: false,
                mode: "index"
            },
            scales: {
                y: {
                    min: 0,
                    max: 100,
                    ticks: {
                        callback: value => value + "%"
                    }
                },
                x: {
                    ticks: {
                        maxTicksLimit: 7,
                        callback: function(value) {
                            const fecha = this.getLabelForValue(value);
                            return fecha.substring(11, 16);
                        }
                    }
                }
            },
            plugins: {
                legend: { display: false }
            }
        }
    });
}

// GAUGES SEMICIRCULARES

const textoGauge = {
    id: "textoGauge",
    afterDraw(chart) {
        if (chart.config.type !== "doughnut") return;

        const {ctx, chartArea} = chart;
        if (!chartArea) return;

        const valor = chart.options.plugins.valorGauge;
        if (valor === undefined) return;

        const meta = chart.getDatasetMeta(0);
        const arco = meta.data[0];
        if (!arco) return;

        ctx.save();
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 30px Arial";

        ctx.fillText(
            valor.toFixed(1) + "%",
            arco.x,
            arco.y - arco.outerRadius * 0.25
        );

        ctx.restore();
    }
};

Chart.register(textoGauge);

function crearGauge(id, valor, color) {
    valor = Math.max(0, Math.min(100, valor));

    new Chart(document.getElementById(id), {
        type: "doughnut",
        data: {
            datasets: [{
                data: [valor, 100 - valor],
                backgroundColor: [
                    color,
                    "#1e40af"
                ],
                borderWidth: 0,
                circumference: 180,
                rotation: 270,
                cutout: "75%"
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                duration: 700
            },
            plugins: {
                legend: { display: false },
                tooltip: { enabled: false },
                valorGauge: valor
            }
        }
    });
}

// CREAR LAS SEIS GRÁFICAS

crearLinea("cpuLinea", cpu, "#1d4ed8");
crearLinea("ramLinea", ram, "#1d4ed8");
crearLinea("discoLinea", disco, "#f97316");

crearGauge("cpuGauge", actualCPU, "#1d4ed8");
crearGauge("ramGauge", actualRAM, "#1d4ed8");
crearGauge("discoGauge", actualDisco, "#f97316");
</script>

</body>
</html>
