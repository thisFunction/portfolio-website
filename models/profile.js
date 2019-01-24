const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create schema
const ProfileSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    city: {
        type: Date,
        default: Date.now()
    },
    
});

const Posts = mongoose.model('Posts', PostsSchema);

module.exports = PostsSchema;