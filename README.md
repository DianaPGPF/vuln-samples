# vuln-samples

# FA AI Fixes Samples

Este repo contiene archivos **de prueba** con vulnerabilidades simples y *deliberadas* para que puedas probar sugerencias de fixes (incluida la extensión de VS Code).
> **¡OJO!** No uses este código en producción.

## Contenido
- `javascript/xss.js`: XSS en el DOM por `innerHTML`.
- `node/sql_injection.js`: SQLi por concatenación de `userId`.
- `python/command_injection.py`: Inyección de comandos con `subprocess` sin sanitizar.
- `java/InsecureCrypto.java`: Uso inseguro de `MD5`.

## Cómo usar en VS Code
1. Abre VS Code y **File → Open Folder...**. Selecciona esta carpeta.
2. Instala las extensiones que quieras probar (por ejemplo, linters o tu extensión de fixes).
3. Abre cualquiera de los archivos y revisa las advertencias/sugerencias que aparezcan.
4. Aplica fixes en un branch o copia del archivo, nunca sobre código real.

## Cómo ejecutar (opcional)
- **Node/JS**: `cd node && npm init -y` y `node sql_injection.js "1 OR 1=1"`.
- **Python 3**: `python3 python/command_injection.py "&& echo hacked"`.
- **Java**: Compila con `javac java/InsecureCrypto.java` y ejecuta `java InsecureCrypto`.

## Descargo de responsabilidad (AI)
**AI puede cometer errores — revisa cualquier fix antes de aplicarlo.**
