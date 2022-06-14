const { count } = require("console")
const validation = function(req, res, next) {
    let data = req.body
    let a = req.headers.isfreeappuser
    data.isFreeAppUser = a

    if (a) {
        next()
    } else {
        res.send({ msg: "The error" })
    }

}

module.exports.validation = validation