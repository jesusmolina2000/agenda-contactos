import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const URI = "http://localhost:4000/Contactos";

const CompShowContactos = () => {
  const [contactos, setContacto] = useState([]);
  useEffect(() => {
    getContactos();
  }, []);

  const getContactos = async () => {
    const res = await axios.get(URI);
    console.log(res.data);
    setContacto(res.data);
  };

  const deleteContacto = async (id) => {
    try {
      const res = await axios.delete(`${URI}/${id}`);
      console.log("Item successfully deleted.");
      getContactos();
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Link to="/create" className="btn btn-primary mt-2 mb-2">
            crear
          </Link>
          <table className="table">
            <thead className="table-primary">
              <tr>
                <th>id</th>
                <th>nombres</th>
                <th>apellidos</th>
                <th>correo</th>
                <th>celular</th>
                <th>direccion</th>
                <th>telefono</th>
                <th>telefono 2</th>
                <th>acciones</th>
              </tr>
            </thead>
            <tbody>
              {contactos.map((contacto) => (
                <tr key={contacto.id}>
                  <td>{contacto.id}</td>
                  <td>{contacto.nombres}</td>
                  <td>{contacto.apellidos}</td>
                  <td>{contacto.correo}</td>
                  <td>{contacto.celular}</td>
                  <td>{contacto.direccion}</td>
                  <td>{contacto.telefono}</td>
                  <td>{contacto.telefono2}</td>
                  <td>
                    <Link
                      to={`/edit/${contacto.id}`}
                      className="btn btn-primary"
                    >
                      editar
                    </Link>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => deleteContacto(contacto.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CompShowContactos;
