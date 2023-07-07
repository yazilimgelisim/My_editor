const mongoose = require('mongoose')
mongoose.set('strictQuery', true)
require('dotenv').config()

const conn = () =>{
    mongoose.connect(process.env.DB_URL, {
        dbName:'editor',
        useNewURLParser:'true'
    })
    .then(()=>{console.log('Database connected')})
    .catch((err)=>{console.log(err)})
}


module.exports = conn 