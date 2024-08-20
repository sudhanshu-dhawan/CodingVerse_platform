const mongoose = require("mongoose");
require("dotenv").config;
const dbConnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL , {
        family:4,
    })
    .then(()=>{
         console.log("connection sucessful with the database");
    }) 
    .catch((error)=>{
        console.error(error);
        console.log("connection not made with the databse");
        process.exit(1);
    })
}

module.exports = dbConnect;