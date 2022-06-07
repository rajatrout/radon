const { count } = require("console")
const BookModel = require("../Models/bookModel.js")

const createBook = async function(req, res) {
    let data = req.body

    let savedData = await BookModel.create(data)
    res.send({ msg: savedData })
}

const bookList = async function(req, res) {
    let savedData = await BookModel.find().select({ bookName: 1, authorName: 1, _id: 0 })
    res.send({ msg: savedData })
}

const getBooksInYear = async function(req, res) {
    let a = req.params.years
    let savedData = await BookModel.find({
        year: { $eq: a }
    })
    res.send({ msg: savedData })
}

const getParticularBooks = async function(req, res) {
    let a = req.body
    let savedData = await BookModel.find(a)
    res.send({ msg: savedData })
}

const getXINRBooks = async function(req, res) {
    let savedData = await BookModel.find({
        $or: [{ "bookPrize.indianPrize": { $eq: "100INR" } },
            { "bookPrize.indianPrize": { $eq: "200INR" } },
            { "bookPrize.indianPrize": { $eq: "500INR" } }
        ]
    })
    res.send({ msg: savedData })
}


const getRandomBooks = async function(req, res) {
    let savedData = await BookModel.find({
        $or: [{ stockAvailable: true }, { totalPages: { $gt: 500 } }]
    })
    res.send({ msg: savedData })
}


module.exports.createBook = createBook
module.exports.bookList = bookList
module.exports.getBooksInYear = getBooksInYear
module.exports.getParticularBooks = getParticularBooks
module.exports.getXINRBooks = getXINRBooks
module.exports.getRandomBooks = getRandomBooks