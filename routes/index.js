const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('home', {
        title: "Inicio - Omar Alexander"
    })
})

router.get('/contacto', (req, res) => {
    res.render('contact', {
        title: "Contacto - Omar Alexander"
    })
})

router.get('/sobre-mi', (req, res) => {
    res.render('about', {
        title: "Sobre mí - Omar Alexander"
    })
})

router.get('/proyectos', (req, res) => {
    res.render('projects', {
        title: "Proyectos - Omar Alexander"
    })
})

module.exports = router