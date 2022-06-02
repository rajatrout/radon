const express = require('express');
const lodashFunctions = require('lodash');

const router = express.Router();

router.get('/month', function(req, res) {
    const allMonth = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]
    console.log(lodashFunctions.chunk(allMonth, 3))

    const arrUnion = [1, 1, 1, 1, 1, 2, 3, 4, 3, 2, 3, 4, 3, 4, 3, 4]
    console.log(lodashFunctions.union(arrUnion))

    const lastNineOddNumbers = [1, 3, 5, 7, 9, 11, 13, 15, 17]
    console.log(lodashFunctions.tail(lastNineOddNumbers))

    const keyArray = [
        ["horror", "The Shining"],
        ["drama", "Titanic"],
        ["thriller", "Shutter Island"],
        ["fantacy", "Labyrinth"]

    ]

    console.log(lodashFunctions.fromPairs(keyArray))

    res.send("The solution for problem statement number 4 of nodejs module assignment.")
});


module.exports = router;
// adding this comment for no reason