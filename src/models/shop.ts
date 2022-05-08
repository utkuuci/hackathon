var mongoose = require('mongoose');
var { Schema } = mongoose;

const shopSchema = new Schema({
    name: {
        require: true,
        type: String
    },
    email: {
        require: true,
        type: String,
    },
    password: {
        require: true,
        type: String
    },
    province: {
        require: true,
        type: String
    },
    city: {
        require: true,
        type: String
    },
    neighbourhood: {
        require: true,
        type: String
    },
    street: {
        require: true,
        type: String
    },
    buildingNo: {
        require: true,
        type: String
    },
});

module.exports = mongoose.model('Shop', shopSchema);