import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Contacto = sequelize.define("Contacto", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombres: {
    type: DataTypes.STRING,
  },
  apellidos: {
    type: DataTypes.STRING,
  },
  correo: {
    type: DataTypes.STRING,
  },
  celular: {
    type: DataTypes.STRING,
  },
  direccion: {
    type: DataTypes.STRING,
  },
  telefono: {
    type: DataTypes.STRING,
  },
  telefono2: {
    type: DataTypes.STRING,
  },
});
