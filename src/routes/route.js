const express = require('express');
const loggerModule = require('../logger/logger.js') // Handler or Controler (Imported)
const helperModule = require('../util/helper.js')
const formatterModule = require('../validator/formatter.js')


const router = express.Router();

router.get('/test-me', function(req, res) {

    loggerModule.welcome()
    helperModule.date()
    helperModule.month()
    helperModule.batch()
    formatterModule.trim()
    formatterModule.lower()
    formatterModule.upper()

    res.send('My first ever api!')
});

router.get('/test-me1', function(req, res) {
    res.send('My second ever api!')
});

router.get('/test-me2', function(req, res) {
    res.send('My third api!')
});

router.get('/test-me3', function(req, res) {
    res.send('My 4th api!')
});

router.get('/test-me4', function(req, res) {
    res.send('My last api!')
});

module.exports = router;
// adding this comment for no reason