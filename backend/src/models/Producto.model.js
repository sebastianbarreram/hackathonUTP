const mongoose = require('mongoose')
const {Schema} = mongoose

const ProductoSchema = new Schema({
    nombre: {
        type: String
    },
    descripcion: {
        type: String
    },
    imagen: {
        type: String
    },
    material: {
        type: String
    },
    precio: {
        type: Number
    },
    estado: {
        type: String,
        default: 'disponible'
    },
    artesano: {
        type: String
    }
});

module.exports = mongoose.model('producto', ProductoSchema)