import app from "./app.js";
import { sequelize } from "./database/database.js";

//import './models/Contactos.js';

async function main() {
  try {
    await sequelize.sync({ force: false });
    console.log("la conexion se ha hecho ");
    app.listen(4000);
    console.log("escuchando puerto", 4000);
  } catch (error) {
    console.error("no se puede conectar a la base de datos", error);
  }
}

main();
