const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RolSchema= new Schema({
    rol:{
        type:String,
        require:false
    },
    descripcion:{
        type:String,
        require:false
    }
})

module.exports = mongoose.model('Rol',RolSchema);