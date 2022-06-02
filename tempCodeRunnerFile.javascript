const arr = [1, 2, 3, 4, 5, 7, 8, 9]
    const sumOfNumbers = (9 * 10) / 2
    let sumOfArray = 0
    for (let i = 0; i < arr.length; i++) {
        sumOfArray = sumOfArray + arr[i]
    }
    const theMissingNumber = sumOfNumbers - sumOfArray
    console.log(theMissingNumber)
    console.log(sumOfArray)