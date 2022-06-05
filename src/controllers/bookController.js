const bookModel = require("../models/bookModel")

const createBook = async function(req, res) {
    let data = req.body
    let savedData = await bookModel.create(data)
    res.send({ msg: savedData })
}

const getBooksData = async function(req, res) {
    let allbooks = await bookModel.find()
    res.send({ msg: allbooks })
}

module.exports.createBook = createBook
module.exports.getBooksData = getBooksData