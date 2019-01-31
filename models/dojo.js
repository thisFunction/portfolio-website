const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create schema
const DojoSchema = new Schema({
    name: {
        type: String,
        required: true
    }
});

module.exports = Dojo = mongoose.model('dojo', DojoSchema);
