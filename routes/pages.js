const express = require('express')
const router = express.Router()
const path = require('path')
const Content = require(path.join(__dirname, '..', 'schema', 'content.js'))

router.get('/', (req, res)=>{
    Content.find().then((data)=>{
        res.render('site/pages', {
            data:data.map(item=>item.toJSON())
        })
    })
   
})



module.exports = router