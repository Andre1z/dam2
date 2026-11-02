<?php

$datos = htmlspecialchars(var_export($_POST, true), ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');

?>
<!doctype html>
<html lang="es">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Andrei Buga | Datos recibidos</title>
    <style>
        *{box-sizing:border-box}
        body{min-height:100vh;margin:0;padding:clamp(16px,5vw,48px);background:#f3f6fb;color:#111827;font:16px/1.6 Arial,sans-serif}
        main{width:min(100%,800px);margin:0 auto;padding:clamp(18px,4vw,32px);border:1px solid #d5deed;border-top:6px solid #f97316;border-radius:18px;background:#fff;box-shadow:0 16px 44px #11182714}
        h1{margin-top:0;color:#111827;font-size:clamp(1.7rem,4vw,2.4rem)}
        pre{overflow:auto;padding:16px;border:1px solid #d5deed;border-radius:10px;background:#eff6ff;color:#111827;white-space:pre-wrap;overflow-wrap:anywhere}
        a{display:inline-block;margin-top:8px;padding:10px 16px;border-radius:9px;background:#1d4ed8;color:#fff;font-weight:700;text-decoration:none}
        a:hover{background:#1e40af}
    </style>
</head>
<body>
<main>
    <h1>Andrei Buga</h1>
    <p>Datos recibidos del formulario:</p>
    <pre><?= $datos ?></pre>
    <a href="002-reemplazar-input.html">Volver al formulario</a>
</main>
</body>
</html>