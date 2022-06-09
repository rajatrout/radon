const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    authorName: String,
    authorAge: Number,
    authorAddress: String,
    authorRating: Number
}, { timestamps: true });

module.exports = mongoose.model('newAuthor', authorSchema)