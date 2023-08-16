const mongoose = require('mongoose');
const Schema = mongoose.Schema

const ProdSchema = new Schema({
  nombre: {
    type: String,
    require: true,
  },
  descripcion: {
    type: String,
    require: true,
  },
  categoria: {
    type: String,
    required: true
  },
  precio: {
    type: Number,
    require: true,
  },
  existencia: {
    type: Number,
    require: true,
  },
  imagen: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Productos',ProdSchema);
