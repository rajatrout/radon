const express = require('express');

const router = express.Router();

let players = [{
        "name": "manish",
        "dob": "1/1/1995",
        "gender": "male",
        "city": "jalandhar",
        "sports": [
            "swimming"
        ]
    },
    {
        "name": "gopal",
        "dob": "1/09/1995",
        "gender": "male",
        "city": "delhi",
        "sports": [
            "soccer"
        ],
    },
    {
        "name": "lokesh",
        "dob": "1/1/1990",
        "gender": "male",
        "city": "mumbai",
        "sports": [
            "soccer"
        ],
    },
]

router.post('/players', function(req, res) {



    /* let n = req.body.name
    let d = req.body.dob
    let g = req.body.gender
    let c = req.body.city
    let s = req.body.sports

    let m = { "name": n, "dob": d, "gender": g, "city": c, "sports": s }

    if (n !== players.req.body.name) {
        players.push(m)
    }*/
    let isName = false
    for (let i = 0; i < players.length; i++) {
        if (players[i].name == req.body.name) {
            isName == true
            break;
        }
    }
    if (isName) {
        res.send("The person is already exists.")
        console.log("The person is already exists.")
    } else {
        players.push(req.body)
        res.send(players)
        console.log(players)
    }

    //res.send({ data: players, status: true })
});

module.exports = router;