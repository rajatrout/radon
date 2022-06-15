const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function(abcd, xyz) {
    //You can name the req, res objects anything.
    //but the first parameter is always the request 
    //the second parameter is always the response
    let data = abcd.body;
    let savedData = await userModel.create(data);
    xyz.send({ msg: savedData });
};

const loginUser = async function(req, res) {
    let userName = req.body.emailId;
    let password = req.body.password;

    let user = await userModel.findOne({ emailId: userName, password: password });
    if (!user)
        return res.send({
            status: false,
            msg: "username or the password is not corerct",
        });


    //<-------------------------------Create a TOKEN--------------------------------------->

    // Once the login is successful, create the jwt token with sign function
    // Sign function has 2 inputs:
    // Input 1 is the payload or the object containing data to be set in token
    // The decision about what data to put in token depends on the business requirement
    // Input 2 is the secret
    // The same secret will be used to decode tokens
    let token = jwt.sign({
            userId: user._id.toString(),
            batch: "radon",
            organisation: "FunctionUp",
        },
        "functionup-radon"
    );
    res.setHeader("x-auth-token", token);
    res.send({ status: true, token: token });
};

const getUserData = async function(req, res) {

    let userId = req.params.userId;
    let userDetails = await userModel.findById(userId);

    res.send({ status: true, data: userDetails });
};

const updateUser = async function(req, res) {

    let userId = req.params.userId;

    let userData = req.body;
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, { new: true });
    res.send({ status: true, data: updatedUser });
};

const deleteUser = async function(req, res) {

    let userId = req.params.userId;

    let deleteUser = await userModel.findOneAndUpdate({ _id: userId }, { isDeleted: true }, { new: true });
    res.send({ status: true, data: deleteUser });
};



module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser;