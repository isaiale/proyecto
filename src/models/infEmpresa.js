const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmpresaSchema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  informacion:{
    type: String,
    required: true
  },
  direccion: {
    type: String,
    required: true
  },
  telefono: {
    type: String,
    required: true
  },
  correo: {
    type: String,
    required: true
  },
  logo: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Empresa', EmpresaSchema);
