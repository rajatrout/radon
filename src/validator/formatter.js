const getTrim = function() {
    const x = "    Function      Up      give      us      a     real   time   experience            "
    console.log(x.trim())
}

const changeToLowerCase = function() {
    const y = "My NaME IS RaJAt KUMAR RoUT"
    console.log(y.toLowerCase())
}

const changeToUpperCase = function() {
    const z = "My NaME IS RaJAt KUMAR RoUT"
    console.log(z.toUpperCase())
}

module.exports.trim = getTrim
module.exports.lower = changeToLowerCase
module.exports.upper = changeToUpperCase