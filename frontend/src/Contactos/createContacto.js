import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI = "http://localhost:4000/Contactos";

const CompCreateContacto = () => {
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [correo, setCorreo] = useState("");
  const [celular, setCelular] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [telefono2, setTelefono2] = useState("");
  const navigate = useNavigate();

  const save = async (e) => {
    e.preventDefault();
    await axios.post(URI, {
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
  return (
    <div>
      <h3>crear contacto</h3>

      <form onSubmit={save}>
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

export default CompCreateContacto;
