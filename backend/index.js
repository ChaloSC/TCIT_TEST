import express from "express";
import morgan from "morgan";
import postsRoutes from "./routes/posts.routes.js";
import Posts from "./database/models.js";
import { sequelize } from "./database/db.js";

const app = express();

app.use(morgan("dev"));

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/", postsRoutes);
app.listen(process.env.PORT);

const iniciarConexion = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexión establecida con PostgreSQL.");

    await sequelize.sync({ force: false });
    console.log("Base de datos sincronizada.");

    // Se crea un nuevo post en la base de datos al inicializar la aplicación
    await Posts.create({
      nombre: "Mi primera publicación",
      descripcion:
        "Este es un ejemplo de descripción al ejecutarse la aplicación",
    });
  } catch (error) {
    console.error("Error al conectar con la base de datos:", error);
  }
};

iniciarConexion();
