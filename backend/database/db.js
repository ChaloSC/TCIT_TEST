// Importación de las dependencias
import Sequelize from "sequelize";

// Importación de las variables de entorno
const DB_DATABASE = process.env.DBNAME;
const DB_USER = process.env.DBUSER;
const DB_PASSWORD = process.env.DBPASSWORD;
const DB_HOST = process.env.DBHOST;

// Configuración de la conexión a PostgreSQL
// Reemplazar nombre de base de datos, usuario, contraseña, host y dialect según corresponda.
export const sequelize = new Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
  host: DB_HOST, // Cambia si es un servidor remoto
  dialect: "postgres", // Especifica que usarás PostgreSQL
});