import Sequelize from "sequelize";

export const sequelize = new Sequelize("directorio", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
