const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();
//const RequestIp = require('request-ip');
const moment = require('moment');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://rajatrout470:tw1llhZ2PEKtw4qr@cluster0.rqmvg7o.mongodb.net/Populate-Reference(1)-MongoDb", {
        useNewUrlParser: true
    })
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))

app.use(function(req, res, next) {

    const time = new Date()

    //const ip = RequestIp.getClientIp(req)

    const ip = req.socket.remoteAddress

    const path = req.path

    console.log(time + ", " + ip + ", " + path)
    next()
});

app.use('/', route);


app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});