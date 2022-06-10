const bookModel = require("../models/bookModel")
const PublisherModel = require("../models/publisherModel.js")
const AuthorModel = require("../models/authorModel.js")

// const createBook = async function(req, res) {

//     let book = req.body

//     let authorId = await AuthorModel.find().select({ _id: 1 })
//     console.log(authorId)
//     let authorIdArr = authorId.map((obj) => { return obj._id.toString() })
//     console.log(authorIdArr)

//     let publisheId = await PublisherModel.find().select({ _id: 1 })
//     let publishIdArr = publisheId.map((obj) => { return obj._id.toString() })

//     if (book.authorId != undefined) {
//         if (book.publisherId != undefined) {
//             if (authorIdArr.includes(book.authorId)) {
//                 if (publishIdArr.includes(book.publisherId)) {
//                     let bookCreated = await bookModel.create(book)
//                     return res.send({ data: bookCreated })
//                 }
//                 return res.send({ data: "Invalid Publisher Id" })
//             }
//             return res.send({ data: "Invalid Author Id" })
//         }
//         return res.send({ data: "Missing Publisher Id" })
//     }
//     return res.send({ data: "Missing Author Id" })
// }


const createBook = async function(req, res) {
    const book = req.body
    const author = req.body.authorId

    const publisher = req.body.publisherId

    if (!author || !publisher) {
        return res.send({ msg: "The authorId and publisherId are required" })
    } else {
        const m = await AuthorModel.findById(author)

        const n = await PublisherModel.findById(publisher)

        if (!m || !n) {
            return res.send({ msg: "AuthorID or PublisherId is not present" })
        } else {
            let a = await bookModel.create(book)
            return res.send({ msg: a, status: true })
        }
    }
}


const getAllDetails = async function(req, res) {

    let details = await bookModel.find().populate('authorId').populate('publisherId')
    return res.send({ data: details })
}

const updateIsHardCover = async function(req, res) {
    let a = await PublisherModel.find({
        $or: [{
                publisherName: "Penguin"
            },
            {
                publisherName: "Harper Collins"
            }
        ]

    })

    for (let i of a) {
        let b = await bookModel.updateMany({
            publisherId: i,
            bookRating: { $gt: 3.5 }
        }, {
            isHardCover: true,
            $inc: { bookPrice: 10 }
        }, { new: true, upsert: true })
    }
    return res.send({ msg: "Update" })
}

/*const updateIsHardCover = async function(req, res) {
    let a = req.params.id1
    console.log(a);
    let b = req.params.id2

    let m = await bookModel.updateMany({
        "publisherId": a,
        "publisherId": b
    }, {
        $set: {
            isHardCover: true
        }
    }, { new: true, upsert: true })
    res.send({ msg: m })
}*/

module.exports.createBook = createBook
module.exports.getAllDetails = getAllDetails
module.exports.updateIsHardCover = updateIsHardCover