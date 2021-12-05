import React, { useState } from "react";
import Axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

function Registro() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [tecnica, setTecnica] = useState("");
  const [contrasena, setContrasena] = useState("");

  const registro = async (e) => {
    e.preventDefault();
    const usuario = { nombre, apellido, correo, ciudad, tecnica, contrasena };
    const respuesta = await Axios.post("/user/crear", usuario);
    const mensaje = respuesta.data.mensaje;
    if (mensaje !== "Registro exitoso") {
      Swal.fire({
        icon: "error",
        title: mensaje,
        text: "Vuelva a intentarlo",
      });
      // limpiarCampos();
    } else {
      window.location.href = "/login";
      Swal.fire({
        icon: "success",
        title: mensaje,
        text: "Bienvenido",
      });
    }
  };
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6  mx-auto">
          <div className="card">
            <div className="container text-center fa-5x">
              <i className="fas fa-user-plus"></i>
            </div>

            <div className="card-header text-center">
              <h4>Registro</h4>
            </div>
            <div className="card-body">
              <form onSubmit={registro}>
                <div className="form-group">
                  <label>Nombres</label>
                  <input
                    type="text"
                    className="form-control"
                    autoFocus
                    required
                    onChange={(e) => setNombre(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Apellidos</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    onChange={(e) => setApellido(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>Correo</label>
                  <input
                    type="email"
                    className="form-control"
                    required
                    onChange={(e) => setCorreo(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Ciudad</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    onChange={(e) => setCiudad(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Tecnica artesanal</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    onChange={(e) => setTecnica(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>Contraseña</label>
                  <input
                    type="password"
                    className="form-control"
                    required
                    onChange={(e) => setContrasena(e.target.value)}
                  />
                </div>
                <input type="submit" className="btn btn-primary  btn-block" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registro;
