const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function(abcd, xyz) {
    //You can name the req, res objects anything.
    //but the first parameter is always the request 
    //the second parameter is always the response
    try {
        let data = abcd.body;
        let savedData = await userModel.create(data);
        xyz.status(201).send({ msg: savedData });
    } catch (error) {
        xyz.status(400).send({ msg: "Error", error: error.message })
    }
};

const loginUser = async function(req, res) {
    try {
        let userName = req.body.emailId;
        let password = req.body.password;

        if (userName == undefined || password == undefined) {
            res.status(400).send({ msg: "Username and password is mandatory (Bad REQUEST)" })
        }
        let user = await userModel.findOne({ emailId: userName, password: password });
        if (!user)
            return res.status(400).send({
                status: false,
                msg: "username or the password is not corerct (BAD REQUEST)",
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
        res.status(200).send({ status: true, token: token });
    } catch (error) {
        res.status(500).send({ msg: "Error", error: error.message })
    }
}

const getUserData = async function(req, res) {

    try {
        let userId = req.params.userId;
        console.log(userId)
        if (!userId) {
            res.status(400).send({ msg: "UserID is madatory (Bad Request)" })
        }
        let userDetails = await userModel.findById(userId);

        res.status(200).send({ status: true, data: userDetails });

    } catch (error) {
        res.status(500).send({ msg: error.message })
    }
};

const updateUser = async function(req, res) {
    try {
        let userId = req.params.userId;

        let userData = req.body;
        let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, { new: true });
        res.status(200).send({ status: true, data: updatedUser });

    } catch (error) {
        res.status(500).send({ msg: error.message })
    }
};

const deleteUser = async function(req, res) {
    try {
        let userId = req.params.userId;

        let deleteUser = await userModel.findOneAndUpdate({ _id: userId }, { isDeleted: true }, { new: true });
        res.send({ status: true, data: deleteUser });

    } catch (error) {
        res.status(500).send({ msg: error.message })
    }
}



module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser;