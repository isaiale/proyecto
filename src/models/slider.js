const mongoose = require('mongoose');

const sliderSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  },
  imagen: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Slider', sliderSchema);
