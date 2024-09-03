const mongoose = require('mongoose');
const colors = require("colors");


const db = (uri) => {
    mongoose.connect(uri).then(() => console.log(`MongoDB Connected...`.bgBlue)
    ).catch(error => console.log(error))
}

module.exports = db;