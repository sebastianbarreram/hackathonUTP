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
    ciudad: {
        type: String
    },
    tecnica: {
        type: String
    },
    contrasena:{
        type: String
    },
    tipo:{
        type: String
    }
// },{
//     collection: 'Users'
});
module.exports = mongoose.model('user', userSchema);