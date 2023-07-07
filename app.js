const express = require('express')
const {engine} = require('express-handlebars')
const bodyParser = require('body-parser')
const path = require('path')
const dbs = require(path.join(__dirname, 'dbs.js'))
require('dotenv').config()

const app = express()


//! View engine setting area
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'views'))

//! Data trasfer setting area
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//! Static file download area
app.use(express.static(path.join(__dirname, 'public')))

//! Database connection area
dbs()


//! Router include Area
const editor = require(path.join(__dirname, 'routes', 'editor.js'))
const add = require(path.join(__dirname, 'routes', 'add.js'))
const pages = require(path.join(__dirname, 'routes', 'pages.js'))


//! Router use area
app.use('/editor', editor)
app.use('/add', add)
app.use('/pages', pages)


//! Error page Area
app.use((req, res)=>{
    res.status(500).render('site/errors',{
        content:'Page is not found'
    })
})


//! Server lisntening area
app.listen(process.env.PORT, ()=>{
    console.log(`Server is running, http://127.0.0.1:${process.env.PORT}/`)
})