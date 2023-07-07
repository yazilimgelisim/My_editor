const mongoose = require('mongoose')
const Schema = mongoose.Schema


const contentSchema = new Schema({
    title:{type:String, require:true},
    text:{type:String, require:true}
})

const Content = mongoose.model('Content', contentSchema)
module.exports = Content