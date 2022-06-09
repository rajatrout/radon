const bookModel = require("../models/bookModel")

const createBook = async function(req, res) {
    let book = req.body
    let bookCreated = await bookModel.create(book)
    res.send({ data: bookCreated })
}

const getAllDetails = async function(req, res) {

    let details = await bookModel.find().populate("newauthors", "newpublishers")
    res.send({ data: details })
}

module.exports.createBook = createBook
module.exports.getAllDetails = getAllDetails