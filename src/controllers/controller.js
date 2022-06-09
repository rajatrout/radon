const AuthorModel = require("../models/authorModel.js")
const BookModel = require("../models/bookModel.js")

const createAuthor = async function(req, res) {
    let data = req.body

    let savedData = await AuthorModel.create(data)
    res.send({ msg: savedData })
}

const createBook = async function(req, res) {
    let data = req.body

    let savedData = await BookModel.create(data)
    res.send({ msg: savedData })
}

const booksByChetanBhagat = async function(req, res) {
    let a = await AuthorModel.find({ authorName: "Chetan Bhagat" }).select("authorId ")
    let b = await BookModel.find({
        authorId: a[0].authorId
    })
    res.send({ msg: b })
}

const authorOfTwoStates = async function(req, res) {
    let a = await BookModel.findOneAndUpdate(

        { bookName: "2 States" }, { $set: { bookPrize: 100 }, new: true }

    )
    let b = await AuthorModel.find({ authorId: a.authorId }).select("authorName")
    let prizes = a.bookPrize
    res.send({ msg: b, prizes })
}

const bookBetween50And100 = async function(req, res) {
    let a = await BookModel.find({
        bookPrize: { $gte: 50, $lte: 100 }
    }).select({
        "authorId": 1,
        _id: 0
    })

    for (let x = 0; x < a.length; x++) {
        let b = await AuthorModel.findOne({ "authorId": a[x].authorId })
        res.send({ msg: b.authorName })
    }
}

const booksByAuthorId = async function(req, res) {

    let a = req.params.id
    let b = await BookModel.find({ "authorId": a }).select({ bookName: 1, _id: 0 })
    res.send({ msg: b })

}

const listOfAuthors = async function(req, res) {

    let a = await BookModel.find({ bookRating: { $gte: 4 } }).select({ "authorId": 1, _id: 0 })
    let m = a.map(x => x.authorId)
    let b = await AuthorModel.find({
        "authorId": {
            $in: m
        },
        age: { $gt: 50 }
    })
    let n = b.map(y => y.authorId)
    b = await AuthorModel.find({
        "authorId": { $in: n }
    }).select({
        "authorName": 1,
        "age": 1,
        "_id": 0
    })

    res.send({ msg: b })
}


module.exports.createAuthor = createAuthor
module.exports.createBook = createBook
module.exports.booksByChetanBhagat = booksByChetanBhagat
module.exports.authorOfTwoStates = authorOfTwoStates
module.exports.bookBetween50And100 = bookBetween50And100
module.exports.booksByAuthorId = booksByAuthorId
module.exports.listOfAuthors = listOfAuthors