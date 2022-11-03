import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = "http://localhost:4000/Contactos";

const CompEditContacto = () => {
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [correo, setCorreo] = useState("");
  const [celular, setCelular] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [telefono2, setTelefono2] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const updateContacto = async (e) => {
    e.preventDefault();
    await axios.put(URI + "/" + id, {
      nombres,
      apellidos,
      correo,
      celular,
      direccion,
      telefono,
      telefono2,
    });
    navigate("/");
  };
  useEffect(() => {
    getContactoById(id);
  }, []);

  const getContactoById = async () => {
    const res = await axios.get(URI + "/" + id);
    setNombres(res.data.nombres);
    setApellidos(res.data.apellidos);
    setCorreo(res.data.correo);
    setCelular(res.data.celular);
    setDireccion(res.data.direccion);
    setTelefono(res.data.telefono);
    setTelefono2(res.data.telefono2);
  };
  return (
    <div>
      <h3>editar</h3>
      <form onSubmit={updateContacto}>
        <div className="mb-3">
          <label className="form-label">nombres</label>
          <input required
            value={nombres}
            onChange={(e) => setNombres(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">apellidos</label>
          <input required
            value={apellidos}
            onChange={(e) => setApellidos(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">correo</label>
          <input required
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">celular</label>
          <input required
            value={celular}
            onChange={(e) => setCelular(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">direccion</label>
          <input required
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">telefono</label>
          <input required
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">telefono2</label>
          <input
            value={telefono2}
            onChange={(e) => setTelefono2(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          guardar
        </button>
      </form>
    </div>
  );
};

export default CompEditContacto;
