const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId: {
        type: ObjectId,
        ref: "Author"
    },
    productId: {
        type: ObjectId,
        ref: "Product"
    },
    amount: Number,
    isFreeAppUser: Boolean,
    date: Date,

}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema)