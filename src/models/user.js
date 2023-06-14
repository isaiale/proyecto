const mongoose = require('mongoose');
const Schema = mongoose.Schema

const UserSchema = new Schema({
    nombre:{
        type:String,
        require:true
    },
    contraseña:{
        type:String,
        require:true
    },
    correo:{
        type:String,
        require:true
    }
});

module.exports = mongoose.model('Usuarios',UserSchema);