const express = require('express');
const underscore = require('underscore')

const router = express.Router();

router.get('/sol1', function(req, res) {

    //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
    let arr = [1, 2, 3, 5, 6, 7]


    let sumOfGivenArray = 0
    for (let i = 0; i < arr.length; i++) {
        sumOfGivenArray = sumOfGivenArray + arr[i]
    }

    let sumofAllNumbers = ((arr.length + 1) * (arr.length + 2)) / 2

    let missingNumber = sumofAllNumbers - sumOfGivenArray

    console.log("The missing Number is: " + missingNumber)

    res.send({
        data1: missingNumber
    });
});


router.get("/sol2", function(req, res) {
    //logic : sum of n consecutive numbers is [ n * (first + last) / 2  ]..so get sum of all numbers in array. now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing
    let arr = [33, 34, 35, 37, 38]
    let len = arr.length

    let total = 0;
    for (var i in arr) {
        total += arr[i];
    }

    let firstDigit = arr[0]
    let lastDigit = arr.pop()
    let consecutiveSum = (len + 1) * (firstDigit + lastDigit) / 2
    let missingNumber = consecutiveSum - total

    res.send({ data: missingNumber });
});

module.exports = router;