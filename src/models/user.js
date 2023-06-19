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
    rol: {
        type: Schema.Types.ObjectId,
        ref: "rols",// verificar que esten bien
        require: true
    },
    //resetToken: String, // Campo para almacenar el token de reinicio de contraseña
    //resetTokenExpiry: Date // Campo para almacenar la fecha de expiración del token de reinicio de contraseña
});

module.exports = mongoose.model('Usuarios', UserSchema);