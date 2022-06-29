const collegeModel = require('../model/collegeModel')
const validator = require('validator')

const stringV = function(value) {
    let a = typeof(value)
    if (a !== 'string') {
        return true
    }
    return false
}

const idV = function(value) {
    if (!validator.isAlpha(value)) {
        return true
    }
    return false
}

const createCollege = async function(req, res) {
    const { name, fullName, logoLink } = req.body

    if (Object.keys(req.body).length == 0) {
        resturn.status(400).send({ status: false, message: "Kindly enter your details." })
    }

    if (Object.keys(name).length == 0) {
        return res.status(400).send({ status: false, message: "College Name is required" })
    }

    if (stringV(name) || idV(name)) {
        return res.status(400).send({ status: false, message: "Invalid College Name" })
    }

    const duplicateName = await collegeModel.find({ name: name })
    if (duplicateName) {
        return res.status(400).send({ status: false, message: "The college name is already there, you can directly apply for the internship." })
    }

    if (Object.keys(fullName).length == 0) {
        return res.status(400).send({ status: false, message: "College Name is required" })
    }

    if (stringV(fullName) || idV(fullName)) {
        return res.status(400).send({ status: false, message: "Invalid Full Name of the college" })
    }

    const duplicateFullName = await collegeModel.find({ fullName: fullName })
    if (duplicateFullName) {
        return res.status(400).send({ status: false, message: "The college full name is already there, you can directly apply for the internship." })
    }

    if (Object.keys(logoLink).length == 0) {
        return res.status(400).send({ status: false, message: "College logolink is required" })
    }

    if (stringV(logoLink || !validator.isURL(logoLink))) {
        return res.status(400).send({ status: false, message: "The logoLink is not valid." })
    }

    let saveData = await collegeModel.create(req.body)
    return res.status(201).send({ status: true, data: { saveData } })

}
module.exports.createCollege = createCollege