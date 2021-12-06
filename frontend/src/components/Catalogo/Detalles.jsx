import React from 'react'
import { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function Detalles() {
    const [usuario, setUsuario] = useState([])
    const { id } = useParams()

    const obtenerUsuario = async () => {


        //dentro de la constante res tengo la respuesta a esta peticion 
        const res = await axios.get(`producto/listar/${id}`)
        const users = await res.data
        setUsuario(users)

    }

    useEffect(() => {
        obtenerUsuario()
    },[])
    return (
        <div>
            <h4>{usuario.nombre}</h4>
            <p>Descripcion:{usuario.descripcion}</p>
            <p>Material:{usuario.material}</p>
            <p>Material:{usuario.precio}</p>
            <img src={usuario.imagen}></img>
        </div>
    )
}

export default Detalles
