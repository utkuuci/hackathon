var mongoose = require('mongoose');
var { Schema }: any = mongoose;

const receiptSchema = new Schema({
    date: {
        require: true,
        type: Date,
        default: Date.now,
    },
    shopId: {
        require: true,
        type: {
            type: Schema.Types.ObjectId, ref: "Shop"
        }
    },
    userId: {
        require: true,
        type: {
            type: Schema.Types.ObjectId, ref: "User"
        }
    },
    products: {
        require: true,
        type: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
    },
    totalprice: {
        require: true,
        type: Number
    },
    totalTax: {
        require: true,
        type: Number
    },
    totalSum: {
        require: true,
        type: Number
    },
    payment: {
        require: true,

    }
});

module.exports = mongoose.model('Receipt', receiptSchema);