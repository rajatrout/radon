const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");


const authorisation = async function(req, res, next) {


    //<------------------------Authorization to user to only its own data----------------------->



    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];

    let decodedToken = jwt.verify(token, "functionup-radon");


    //userId for which the request is made. In this case message to be posted.
    let userToBeModified = req.params.userId
        //userId for the logged-in user
    let userLoggedIn = decodedToken.userId

    //userId comparision to check if the logged-in user is requesting for their own data
    if (userToBeModified != userLoggedIn) return res.send({ status: false, msg: 'Access is Denied' })
    next()
}

module.exports.authorisation = authorisation