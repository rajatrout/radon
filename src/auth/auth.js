const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const authentication = async function(req, res, next) {


    // Here we make the "x-auth-token case sensitive as in header we use only small letters

    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];

    //If no token is present in the request header return error

    if (!token) return res.send({ status: false, msg: "token must be present" });


    // If a token is present then decode the token with verify function
    // verify takes two inputs:
    // Input 1 is the token to be decoded
    // Input 2 is the same secret with which the token was generated
    // Check the value of the decoded token yourself

    //<----------------------------------Verify the TOKEN-------------------------------------->

    let decodedToken = jwt.verify(token, "functionup-radon");
    let a = req.params.userId
    console.log(decodedToken)
    console.log(a)

    if (!decodedToken)
        return res.send({ status: false, msg: "token is invalid" });


    //Check if the user is exists or not

    let userId = req.params.userId;
    let userDetails = await userModel.findById(userId);
    if (!userDetails)
        return res.send({ status: false, msg: "No such user exists" });

    next()
}

module.exports.authentication = authentication