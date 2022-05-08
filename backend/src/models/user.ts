var mongoose = require('mongoose');
var { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        require: true,
        type: String
    },
    lastName: {
        require: true,
        type: String,
    },
    email: {
        require: true,
        type: String,
    },
    password: {
        require: true,
        type: String
    }
});

module.exports = mongoose.model('User', userSchema);