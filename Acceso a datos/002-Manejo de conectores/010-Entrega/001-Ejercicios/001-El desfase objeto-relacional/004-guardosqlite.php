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

$db = null;
$transaccionIniciada = false;

try {
  $db = new SQLite3(__DIR__ . '/jugadores.db');
  $db->enableExceptions(true);
  $db->busyTimeout(5000);
  $db->exec("
    CREATE TABLE IF NOT EXISTS jugadores (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      x REAL NOT NULL,
      y REAL NOT NULL
    )
  ");

  $db->exec('BEGIN IMMEDIATE TRANSACTION');
  $transaccionIniciada = true;
  $db->exec('DELETE FROM jugadores');

  $consulta = $db->prepare('INSERT INTO jugadores (x, y) VALUES (:x, :y)');
  foreach ($actores as $actor) {
    $consulta->bindValue(':x', (float) $actor['x'], SQLITE3_FLOAT);
    $consulta->bindValue(':y', (float) $actor['y'], SQLITE3_FLOAT);
    $consulta->execute()->finalize();
    $consulta->reset();
  }
  $consulta->close();

  $db->exec('COMMIT');
  $transaccionIniciada = false;
  $db->close();
} catch (SQLite3Exception $error) {
  error_log($error->getMessage());
  if ($transaccionIniciada && $db instanceof SQLite3) {
    try {
      $db->exec('ROLLBACK');
    } catch (SQLite3Exception $errorRollback) {
      error_log($errorRollback->getMessage());
    }
  }
  if ($db instanceof SQLite3) {
    $db->close();
  }
  responde(500, ['error' => 'No se pudo guardar jugadores.db.']);
  exit;
}

responde(200, ['ok' => true, 'jugadores' => count($actores)]);
