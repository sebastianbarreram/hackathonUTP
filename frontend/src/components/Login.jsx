
import React, { useState } from 'react'
// import Axios from 'axios'
// import Swal from 'sweetalert2'
// import { Link } from 'react-router-dom';


export default function Login() {

    const [correo, setCorreo] = useState('')
    const [contrasena, setContrasena] = useState('')

    // const login = async (e) => {

    //     e.preventDefault();
    //     const usuario = { correo, contrasena }

    //     const respuesta = await Axios.post('/user/login', usuario);
    //     const mensaje = respuesta.data.mensaje

    //     if (mensaje !== 'Bienvenido') {
    //         Swal.fire({
    //             icon: 'error',
    //             title: "Correo o contraseña incorrectos",
    //             showConfirmButton: false,
    //             timer: 1500
    //         })
    //     }

    //     else {
    //         const token = respuesta.data.token
    //         const nombre = respuesta.data.nombre
    //         const idusuario = respuesta.data.id
    //         const administrador = respuesta.data.administrador

    //         sessionStorage.setItem('token', token)
    //         sessionStorage.setItem('nombre', nombre)
    //         sessionStorage.setItem('idusuario', idusuario)
    //         sessionStorage.setItem('administrador',administrador)
    //         window.location.href='/'

    //         Swal.fire({
    //             icon: 'success',
    //             title: mensaje,
    //             showConfirmButton: false,
    //             timer: 1500
    //         })
    //     }
    // }

    return (

        <div className="container mt-4">
            <div className="row">

                <div className="col-md-6 mx-auto">
                    <div className="card">
                        <div className="container text-center fa-5x">
                            <i className="fas fa-user"></i>
                        </div>
                        <div className="card-header text-center">
                            <h4>Inicio de sesión</h4>
                        </div>
                        <div className="card-body">

                            <form onSubmit={console.log("Iniciar sesión!!!!")}>
                                <div className="form-group">
                                    <label>Correo</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        autoFocus
                                        required
                                        onChange={(e) => setCorreo(e.target.value)}


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

                                <input type="submit" value="INICIAR SESIÓN" className="btn btn-primary btn-block" />
                                {/* <Link className="form-group" to="/registrar">¿Aún no tienes un usuario? Regístrate aquí</Link> */}
                            </form>


                        </div>


                    </div>


                </div>

            </div>

        </div>



    )
}
