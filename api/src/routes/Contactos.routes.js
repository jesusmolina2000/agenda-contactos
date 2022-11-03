import { Router } from "express";
import {
  createContacto,
  deleteContacto,
  getContacto,
  getContactos,
  updateContacto,
} from "../controllers/contactos.controller.js";
const router = Router();

router.get("/Contactos", getContactos);
router.post("/Contactos", createContacto);
router.put("/Contactos/:id", updateContacto);
router.delete("/Contactos/:id", deleteContacto);
router.get("/Contactos/:id", getContacto);

export default router;
 