const mongoose = require('mongoose');
const schema = mongoose.Schema;

var userSchema = new schema({
    nombre: {
        type: String
    },
    apellido: {
        type: String
    },
    correo: {
        type: String
    },
    contrasena:{
        type: String
    },
    administrador:{
        type: Boolean,
        default: false
    }
},{
    collection: 'Users'
});

module.exports = mongoose.model('User', userSchema);