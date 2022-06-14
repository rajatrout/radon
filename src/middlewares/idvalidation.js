const { count } = require("console")
const ProductModel = require("../models/productModel")
const UserModel = require("../models/userModel")

const idValidation = async function(req, res, next) {

    let pro = req.body

    let a = await ProductModel.find().select({ _id: 1 })
    let b = a.map(obj => obj._id.toString())

    let x = await UserModel.find().select({ _id: 1 })
    let y = x.map(obj => obj._id.toString())
        // console.log(y)

    if (pro.productId != undefined) {
        if (pro.userId != undefined) {
            if (b.includes(pro.productId)) {
                if (y.includes(pro.userId)) {
                    return next()
                }
                return res.send({ data: "Invalid User Id" })
            }
            return res.send({ data: "Invalid Product Id" })
        }
        return res.send({ data: "User Id is missing" })
    }
    return res.send({ data: "Product Id is missing" })
}

const idFreeAppUser = async function(req, res, next) {
    let pro = req.body
    let app = req.headers.isfreeappuser
    console.log(app)
    let m = await ProductModel.find({ _id: pro.productId }).select({ price: 1, _id: 0 })
    let n = m.map(obj => obj.price.toString())
    if (app) {
        return next()
    }
    return res.send({ msg: m })

}


module.exports.idValidation = idValidation
module.exports.idFreeAppUser = idFreeAppUser