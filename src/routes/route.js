const express = require('express');

const router = express.Router();

router.get('/sol1', function(req, res) {


    res.send({ "The missing Number is: ": missingNumber });
});

module.exports = router;