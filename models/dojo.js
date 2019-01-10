const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create schema
const DojoSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    dob: {
        type: String
    }
});

const Dojo = mongoose.model('Dojo', DojoSchema);

module.exports = Dojo;