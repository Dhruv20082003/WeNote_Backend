const mongoose = require("mongoose");
require('dotenv').config()
// const db_link = `${process.env.MONGO_LINK}`;
connectToMongo = ()=>{
    mongoose.connect("mongodb+srv://amansinghbhagat2:ro3hxQrroq4Pol9R@inotebook.xzmvr.mongodb.net/").then(()=>{
        console.log("Connected");
    }).catch((err)=>{
        console.log(err);
        console.log("Unable to connect to the database");
    })
}
module.exports = connectToMongo;