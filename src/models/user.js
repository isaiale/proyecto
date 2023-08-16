const mongoose = require('mongoose');
const Schema = mongoose.Schema

const UserSchema = new Schema({
    nombre: {
        type: String,
        require: true
    },
    nombreUsers: {
        type: String,
        require: true
    },
    contraseña: {
        type: String,
        require: true
    },
    correo: {
        type: String,
        require: true
    },
    pregunta: {
        type: String,
        require: true
    },
    respuesta: {
        type: String,
        require: true
    },
    rol: {
        type: Schema.Types.ObjectId,
        ref: "rols",
        require: true
    }    
});

module.exports = mongoose.model('Usuarios', UserSchema);