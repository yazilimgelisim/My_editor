const express = require('express')
const router = express.Router()
const path = require('path')
const { yakala } = require(path.join(__dirname, '..', 'helpers', 'helper.js'))
const Content = require(path.join(__dirname, '..', 'schema', 'content.js'))


router.post('/', (req, res) => {
    let { title, text } = req.body
    let cleanText = yakala(text)
    const content = new Content({
        title:title,
        text:text
    })
    content.save()
    .then((result)=>{console.log(result)})
    .catch((err)=>{console.log(err)})
    res.redirect('/editor')
})



module.exports = router