const mongoose = require("mongoose");
require("dotenv").config();


const dbConnection = mongoose.connect(`${process.env.MONGODB_URI}`)


module.exports = dbConnection;