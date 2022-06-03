const express = require('express');

const router = express.Router();

router.get('/sol1', function(req, res) {

    //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
    let arr = [1, 2, 3, 5, 6, 7]
    let len = arr.length

    let sumOfGivenArray = 0
    for (let i = 0; i < len; i++) {
        sumOfGivenArray = sumOfGivenArray + arr[i]
    }

    let sumofAllNumbers = ((len + 1) * (len + 2)) / 2

    let missingNumber = sumofAllNumbers - sumOfGivenArray

    console.log("The missing Number is: " + missingNumber)

    res.send({
        "The missing Number is: ": missingNumber
    });
});


router.get("/sol2", function(req, res) {
    //logic : sum of n consecutive numbers is [ n * (first + last) / 2  ]..so get sum of all numbers in array. now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing
    let arr = [33, 34, 35, 37, 38]
    let len = arr.length

    let sumOfGivenArray = 0;
    for (var i in arr) {
        sumOfGivenArray += arr[i];
    }

    let firstDigit = arr[0]
    let lastDigit = arr.pop()
    let sumOfAllNumbers = (len + 1) * (firstDigit + lastDigit) / 2
    let missingNumber = sumOfAllNumbers - sumOfGivenArray

    res.send({ "The missing Number is: ": missingNumber });
});

module.exports = router;