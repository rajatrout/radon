const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema({
    bookName: String,
    authorId: {
        type: ObjectId,
        ref: "newAuthor",

    },
    bookPrice: Number,
    bookRating: Number,
    publisherId: {
        type: ObjectId,
        ref: "newPublisher",

    },
    isHardCover: {
        type: Boolean,
        default: false
    }

}, { timestamps: true });


module.exports = mongoose.model('newBook', bookSchema)