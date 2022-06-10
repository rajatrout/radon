const express = require('express');
const router = express.Router();

router.get("/test-me", function(req, res) {

    return res.send("My first ever api!")
})

router.get("/rajat", function(req, res) {

    return res.send("Hello I am here")
})

module.exports = router;