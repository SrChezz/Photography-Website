const express = require('express')
const router = express.Router()

router.get('/comida', (req, res) => {
    res.render('categories/food', {
        title: "Comida - Omar Alexander"
    })
})

router.get('/paisajes', (req, res) => {
    res.render('categories/landscape', {
        title: "Paisajes - Omar Alexander"
    })
})

router.get('/retratos', (req, res) => {
    res.render('categories/portrait', {
        title: "Retratos - Omar Alexander"
    })
})

router.get('/urbano', (req, res) => {
    res.render('categories/urban', {
        title: "Fotografia Urbana - Omar Alexander"
    })
})

module.exports = router