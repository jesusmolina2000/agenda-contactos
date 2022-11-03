import express from "express";
import contactosRoutes from "./routes/Contactos.routes.js";
import cors from "cors"

const app = express();

//middlewares
app.use(cors());
app.use(express.json());

app.use(contactosRoutes);
export default app;
