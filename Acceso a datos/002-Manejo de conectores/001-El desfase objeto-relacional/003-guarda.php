<?php
header('Content-Type: application/json; charset=utf-8');

function responde(int $estado, array $contenido): void
{
  http_response_code($estado);
  echo json_encode($contenido, JSON_UNESCAPED_UNICODE);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  responde(405, ['error' => 'Solo se permiten solicitudes POST.']);
  exit;
}

$datos = file_get_contents('php://input');
if ($datos === false) {
  responde(500, ['error' => 'No se pudieron leer los datos recibidos.']);
  exit;
}

try {
  $actores = json_decode($datos, true, 512, JSON_THROW_ON_ERROR);
} catch (JsonException $error) {
  responde(400, ['error' => 'El contenido recibido no es JSON válido.']);
  exit;
}

if (!is_array($actores) || !array_is_list($actores)) {
  responde(400, ['error' => 'Se esperaba una lista de habitantes.']);
  exit;
}

foreach ($actores as $actor) {
  if (
    !is_array($actor)
    || !isset($actor['x'], $actor['y'])
    || (!is_int($actor['x']) && !is_float($actor['x']))
    || (!is_int($actor['y']) && !is_float($actor['y']))
    || !is_finite((float) $actor['x'])
    || !is_finite((float) $actor['y'])
  ) {
    responde(400, ['error' => 'Cada habitante debe incluir coordenadas numéricas válidas.']);
    exit;
  }
}

try {
  $contenido = json_encode($actores, JSON_PRETTY_PRINT | JSON_THROW_ON_ERROR) . PHP_EOL;
  if (file_put_contents(__DIR__ . '/jugadores.json', $contenido, LOCK_EX) === false) {
    throw new RuntimeException('No se pudo escribir jugadores.json.');
  }
} catch (JsonException | RuntimeException $error) {
  error_log($error->getMessage());
  responde(500, ['error' => 'No se pudo guardar jugadores.json.']);
  exit;
}

responde(200, ['ok' => true, 'jugadores' => count($actores)]);
