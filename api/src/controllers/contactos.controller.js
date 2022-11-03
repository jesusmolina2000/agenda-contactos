import { Contacto } from "../models/Contactos.js";

export const getContactos = async (req, res) => {
  try {
    const contactos = await Contacto.findAll();
    res.json(contactos);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getContacto = async (req, res) => {
  try {
    const { id } = req.params;
    const contacto = await Contacto.findOne({ where: { id: id } });
    res.json(contacto);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createContacto = async (req, res) => {
  try {
    const {
      nombres,
      apellidos,
      correo,
      celular,
      direccion,
      telefono,
      telefono2,
    } = req.body;

    const newContacto = await Contacto.create({
      nombres,
      apellidos,
      correo,
      celular,
      direccion,
      telefono,
      telefono2,
    });
    res.json(newContacto);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateContacto = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      nombres,
      apellidos,
      correo,
      celular,
      direccion,
      telefono,
      telefono2,
    } = req.body;

    const contacto = await Contacto.findOne({ where: { id: id } });
    contacto.nombres = nombres;
    contacto.apellidos = apellidos;
    contacto.correo = correo;
    contacto.celular = celular;
    contacto.direccion = direccion;
    contacto.telefono = telefono;
    contacto.telefono2 = telefono2;

    await contacto.save();
    res.json(contacto);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteContacto = async (req, res) => {
  try {
    const { id } = req.params;
    await Contacto.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
