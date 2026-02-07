const mongoose = require('mongoose')

function connectToDB() {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log("Connected To DB")
        })
}


module.exports = connectToDB