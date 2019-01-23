const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create schema
const PostsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    dob: {
        type: String
    }
});

const Posts = mongoose.model('Posts', PostsSchema);

module.exports = PostsSchema;