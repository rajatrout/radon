const date = new Date()

const printDate = function() {
    console.log(date.getDate())
}

const printMonth = function() {
    console.log(date.getMonth())
}

const getBatchInfo = function() {
    console.log("Radon - W3D3, The todays topic was Node.JS Modules")
}

module.exports.date = printDate
module.exports.month = printMonth
module.exports.batch = getBatchInfo