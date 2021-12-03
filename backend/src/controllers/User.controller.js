const UserCtrl = {}
const User = require('../models/User.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


UserCtrl.crearUsuario = async (req, res) => {
    const { nombre, apellido, correo, contrasena, administrador } = req.body
    const NuevoUsuario = new User({
        nombre,
        apellido,
        correo,
        contrasena,
        administrador
    })
    const correousuario = await User.findOne({ correo: correo })
    if (correousuario) {
        res.json({
            mensaje: 'El correo ya existe'
        })

    } else {
        NuevoUsuario.contrasena = await bcrypt.hash(contrasena, 10)
        const token = jwt.sign({ _id: NuevoUsuario._id }, 'Secreta')
        await NuevoUsuario.save()
        res.json({
            mensaje: 'Bienvenido',
            id: NuevoUsuario._id,
            nombre: NuevoUsuario.nombre,
            apellido: NuevoUsuario.apellido,
            token
        })

    }
}


UserCtrl.login = async (req, res) => {

    const { correo, contrasena } = req.body

    const usuario = await User.findOne({ correo: correo })

    if (!usuario) {

        return res.json({

            mensaje: 'Correo incorrecto'

        })

    }


    const match = await bcrypt.compare(contrasena, usuario.contrasena)

    if (match) {


        const token = jwt.sign({ _id: usuario._id }, 'Secreta')

        res.json({
            mensaje: 'Bienvenido',
            id: usuario.id,
            nombre: usuario.nombre,
            administrador: usuario.administrador,
            token
        })




    }
    else {

        res.json({

            mensaje: 'Contraseña incorrecta'

        })

    }


}


UserCtrl.listar = async (req, res) => {

    const respuesta = await User.find()
    res.json(respuesta)

}

UserCtrl.listarId = async (req, res) => {

    const id = req.params.id
    const respuesta = await User.findById({ _id: id })

    res.json(respuesta)


}



UserCtrl.eliminar = async (req, res) => {

    const id = req.params.id
    await User.findByIdAndRemove({ _id: id })
    res.json({

        mensaje: 'Libro eliminado'

    })

}


UserCtrl.actualizar = async (req, res) => {

    const id = req.params.id
    await User.findByIdAndUpdate({ _id: id }, req.body)

    res.json({

        mensaje: 'Libro actualizado'

    })
}


UserCtrl.buscarUsuario = async (req, res) => {

    const nombre = req.params.nombre

    const respuesta = await User.find({ nombre: { $regex: ".*" + nombre + ".*" } })

    res.json(respuesta)

}



module.exports = UserCtrl