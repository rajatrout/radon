const express = require('express');

const router = express.Router();

let listOfMovies = ["Top Gun", "Kashmir Files", "Battleship", "Article 15"]
let len = listOfMovies.length

// Problem Statement 1

router.get('/movies', function(req, res) {

    res.send(listOfMovies)

});

//Problem Statement 2 and 3

router.get('/movies/:indexNumber', function(req, res) {
    let result = false
    let i = 0
    for (i = 0; i < len; i++) {
        if (req.params.indexNumber == i) {
            result = true
            break;
        }
    }
    if (result) {
        res.send(listOfMovies[i])
    } else {
        res.send("Use a valid Index")
    }
});

let listOfFilms = [{
    "id": 1,
    "name": "The Shining"
}, {
    "id": "2",
    "name": "Incendies"
}, {
    "id": 3,
    "name": "Rang De Basanti"
}, {
    "id": 4,
    "name": "Finding Nemo"
}]

let len1 = listOfFilms.length

// Problem Statement 4

router.get('/films', function(req, res) {

    res.send(listOfFilms)

});

//Problem Statement 5

router.get('/films/:filmId', function(req, res) {
    let result1 = false
    let i = 0
    for (i = 0; i < len1; i++) {
        if (req.params.filmId == listOfFilms[i].id) {
            result1 = true
            break;
        }
    }
    if (result1) {
        res.send(listOfFilms[i])
    } else {
        res.send("No Movie Exists with this ID.")
    }

});

module.exports = router;