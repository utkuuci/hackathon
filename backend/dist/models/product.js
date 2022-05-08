"use strict";
var mongoose = require('mongoose');
var { Schema } = mongoose;
const productSchema = new Schema({
    name: {
        require: true,
        type: String,
    },
    category: {
        require: true,
        type: String,
    },
    price: {
        require: true,
        type: Number
    },
    taxRatio: {
        require: true,
        type: Number
    },
    imagePath: {
        require: true,
        type: String
    }
});
module.exports = mongoose.model('Product', receiptSchema);
