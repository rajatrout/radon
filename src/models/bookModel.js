const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        required: true
    },
    bookPrize: {
        indianPrize: String,
        europeanPrize: String
    },
    year: {
        type: Number,
        default: 2021
    },
    tags: ["Finction", "Non-Fiction", "Novel", "Narative", "Science-Fiction", "Mystery", "Fantasy"],
    authorName: String,
    totalPages: Number,
    stockAvailable: Boolean

}, { timestamps: true });

module.exports = mongoose.model('User', bookSchema)