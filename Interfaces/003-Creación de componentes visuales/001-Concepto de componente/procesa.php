<?php
$datos = htmlspecialchars(var_export($_REQUEST, true), ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
?>
<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Formulario recibido | Componente visual</title>
    <style>
      :root{--naranja:#f97316;--azul:#1d4ed8;--blanco:#fff;--negro:#111827}
      *{box-sizing:border-box}
      body{min-height:100vh;margin:0;padding:clamp(16px,5vw,48px);display:grid;place-items:start center;background:#f3f6fb;color:var(--negro);font:16px/1.6 Arial,sans-serif}
      main{width:min(100%,680px);padding:clamp(18px,4vw,32px);border:1px solid #d5deed;border-top:5px solid var(--naranja);border-radius:16px;background:var(--blanco);box-shadow:0 12px 32px #11182714}
      h1{margin-top:0;color:var(--azul)}
      pre{overflow:auto;padding:16px;border-radius:10px;background:#111827;color:var(--blanco);white-space:pre-wrap;overflow-wrap:anywhere}
      a{color:var(--azul);font-weight:700}
      a:focus-visible{outline:3px solid #f9731680;outline-offset:3px}
    </style>
  </head>
  <body>
    <main>
      <h1>Formulario recibido</h1>
      <p>Estos son los datos enviados:</p>
      <pre><?= $datos ?></pre>
      <a href="007-formulario.html">Volver al formulario</a>
    </main>
  </body>
</html>