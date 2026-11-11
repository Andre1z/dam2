# YAML — Resumen

YAML (YAML Ain't Markup Language) es un formato de serialización legible para guardar e intercambiar datos estructurados. Se utiliza habitualmente en archivos de configuración.

## Características

- Representa jerarquías mediante indentación con espacios.
- Admite cadenas de texto, números, booleanos, listas, diccionarios y valores nulos.
- Permite comentarios con `#`.
- Utiliza las extensiones `.yaml` o `.yml`.

## Ejemplo con los datos de `001-objeto.json`

```yaml
nombre: Andrei
apellidos: Buga Mihailescu
email: bugaandrei1@gmail.com
```

## Uso en Python

Instala PyYAML si aún no está disponible:

```bash
pip install pyyaml
```

Los ejemplos de esta carpeta leen `001-objeto.json` desde la misma carpeta del script. Para convertir sus datos a YAML:

```python
import json
from pathlib import Path
import yaml

carpeta = Path(__file__).resolve().parent
with (carpeta / "001-objeto.json").open("r", encoding="utf-8") as archivo:
    datos = json.load(archivo)

with (carpeta / "datos.yaml").open("w", encoding="utf-8") as archivo:
    yaml.safe_dump(datos, archivo, allow_unicode=True, sort_keys=False)
```

Para leer el YAML de forma segura:

```python
with (carpeta / "datos.yaml").open("r", encoding="utf-8") as archivo:
    datos = yaml.safe_load(archivo)

print(datos["nombre"])
```

## Ventajas y precauciones

- Su sintaxis es sencilla y fácil de leer y permite comentarios.
- La indentación debe ser coherente; los errores pueden alterar la estructura.
- Utiliza `yaml.safe_load` para leer archivos que no sean de confianza.
- Para grandes volúmenes de datos puede ser preferible una base de datos.

## Aplicaciones

YAML se utiliza en archivos de configuración de herramientas como Docker Compose, Kubernetes, Ansible y GitHub Actions.
