const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName: String,
    authorId: {
        type: Number,
        required: true
    },
    bookPrize: Number,
    bookRating: Number
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema)