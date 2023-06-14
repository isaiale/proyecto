const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RedesSocialesSchema = new Schema({
    tipo: {
        type: String,
        required: true
    },
    enlace: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('RedesSociales', RedesSocialesSchema);
