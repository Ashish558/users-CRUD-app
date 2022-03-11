
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String
    },

    phoneNumber: {
        type: Number
    },

    hobbies: [{
        type: String
    }],


})


module.exports = mongoose.model("users", userSchema, "users");