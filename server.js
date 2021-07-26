const express = require('express')
const app = express()
const expressLayouts = require("express-ejs-layouts")

const indexRoute= require('./routes/index')
const stylesRoute= require('./routes/styles')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')

app.use(expressLayouts)
app.use(express.static('public'))

app.use('/', indexRoute)
app.use('/estilos', stylesRoute)

app.listen(process.env.PORT || 3000)