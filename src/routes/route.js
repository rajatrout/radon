const express = require('express');
const lodashFunctions = require('lodash');

const router = express.Router();

router.get('/month', function(req, res) {

    // Probelm 4 - A
    const allMonth = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]
    console.log(lodashFunctions.chunk(allMonth, 3))

    //Problem 4 - B

    const lastNineOddNumbers = [1, 3, 5, 7, 9, 11, 13, 15, 17]
    console.log(lodashFunctions.tail(lastNineOddNumbers))

    //Problem 4 - C

    let a = [1, 2, 3, 3]
    let b = [9, 3, 6, 3]
    let c = [5, 3, 1]
    let d = [3, 6, 8, 6]
    let e = [1, 5, 8, 3, 4, 7, 3]
    console.log(lodashFunctions.union(a, b, c, d, e))

    //Problem 4 - D  

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