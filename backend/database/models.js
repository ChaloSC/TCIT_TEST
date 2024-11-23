import { DataTypes } from "sequelize";
import { sequelize } from "./db.js";

// Se declara la estructura de la tabla "Posts" en la base de datos
const Posts = sequelize.define(
  "Posts",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    fechaCreacion: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "Posts",
    timestamps: false,
  }
);

export default Posts;
