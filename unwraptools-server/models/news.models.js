const mongoose = require('mongoose')
let validator = require("validator");
let bcrypt = require("bcryptjs");


// model step: 1
const newsModels = new mongoose.Schema(
        {
            user_email: {
                type: String,  
            },
            news_name: {
                type: String, 
                trim: true,
            },   
            contentLink: {
                type: String, 
            }, 
            categories:{
                type: Array, 
            }, 
            favourite:{
                type: Array, 
            },
            status:{
                type: String,
                default:"inactive",
                enum:["active", "inactive"]
            }, 
            uploadTime:Date, 
        },
        {
             timestamps: true, 
        }
    );

 
     
module.exports = mongoose.model('news', newsModels)