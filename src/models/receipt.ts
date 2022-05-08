var mongoose = require('mongoose');
var { Schema }: any = mongoose;

const receiptSchema = new Schema({
    date: {
        required: true,
        type: Date,
        default: Date.now,
    },
    shopId: {
        required: true,
        type: {
            type: Schema.Types.ObjectId, ref: "Shop"
        }
    },
    userId: {
        required: true,
        type: {
            type: Schema.Types.ObjectId, ref: "User"
        }
    },
    products: {
        required: true,
        type: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
    },
    totalprice: {
        required: true,
        type: Number
    },
    totalTax: {
        required: true,
        type: Number
    },
    totalSum: {
        required: true,
        type: Number
    },
    payment: {
        required: true,

    }
});

module.exports = mongoose.model('Receipt', receiptSchema);