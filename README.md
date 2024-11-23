# Aplicación TEST_TCIT

Este proyecto es una aplicación basada en React, Express.js, Node.js y PostgreSQL. A continuación, se explican los pasos necesarios para instalar y ejecutar la aplicación correctamente.

---

## Requisitos previos

Antes de iniciar la instalación, asegúrate de cumplir con los siguientes requisitos:

1. **PostgreSQL**  
   Debes tener instalado PostgreSQL en tu sistema. Puedes descargarlo e instalarlo desde su [sitio oficial](https://www.postgresql.org/).

2. **Node.js y npm**  
   Instala Node.js (versión LTS recomendada) y npm (incluido con Node.js). Puedes descargarlo desde su [sitio oficial](https://nodejs.org/).

---

## Pasos para la instalación

### 1. Configurar PostgreSQL
   - Inicia PostgreSQL en tu sistema.  
   - Crea una base de datos con el nombre `TEST_TCIT` (puedes usar otro nombre si lo prefieres).

   - Si decides usar un nombre diferente, asegúrate de actualizar el archivo de configuración que se encuentra en la raiz del proyecto con el nombre `.env.example` (del siguiente paso).

---

### 2. Configurar las variables de entorno
   - Dentro del proyecto, se encuentra un archivo llamado `.env.example`.  
   - Puedes renómbralo a `.env` para que el archivo `.gitignore` no lo suba y edítarlo con los datos de conexión de tu base de datos. Aquí hay un ejemplo de cómo debería verse:
   - 
     ```plaintext
     DB_HOST=localhost
     DB_PORT=5432
     DB_NAME=TEST_TCIT
     DB_USER=tu_usuario
     DB_PASSWORD=tu_contraseña
     ```
  - (Opcional) Si el nombre del archivo `.env.example` se cambió, tambien debe corregirse el nombre dentro del archivo `package.json`.

  ```plaintext
  "server": "node --env-file .env.example backend/index.js",
  ```
---

### 3. Instalar dependencias
   Abre una terminal y navega hasta la raíz del proyecto. Ejecuta el siguiente comando para instalar todas las dependencias necesarias:
   ```bash
   npm run setup
   ```
### 4. Ejecutar el Frontend y el Backend
   Ejecuta el siguiente comando para iniciar el Frontend y Backend:
   ```bash
   npm run start
   ```

Todo listo.
