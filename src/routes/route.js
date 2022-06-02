const express = require('express')
app.get("/sol1", function(req, res) {
    //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
    let arr = [1, 2, 3, 5, 6, 7]


    let sumOfGivenArray = 0
    for (leti = 0; i < arr.length; i++) {
        sumOfGivenArray = sumOfGivenArray + arr[i]
    }

    let sumofAllNumbers = (arr.length * (arr.length + 1)) / 2

    let missingNumber = sumofAllNumbers - sumOfGivenArray

    console.log("The missing Number is: " + missingNumber)

    res.send({ data: missingNumber });
});