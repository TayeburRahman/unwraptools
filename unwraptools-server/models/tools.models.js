const mongoose = require('mongoose')
let validator = require("validator");
let bcrypt = require("bcryptjs");


// model step: 1
const toolsModels = new mongoose.Schema(
        {
            user_email: {
                type: String,  
            },
            tool_name: {
                type: String, 
                trim: true,
            }, 
            short_description:{
                type:String, 
            }, 
            websiteURL: {
                type: String,
                // validate:[validator.isURL, "Provided image URL is not valid."], 
            },
            imageURL:{
                type: String, 
            } ,
            description:{
                type: String, 
            },
            categories:{
                type: Array, 
            },
            features:{
                type: Array, 
            },
            price:{
                type: Array, 
            },
            startingPrice:{
                type: String, 
            },
            associated:{
                type: String, 
            },
            favourite:{
                type: Array, 
            }, 
            linkedinUrl:{
                type: String, 
            },
            twitterHandle:{
                type: String, 
            },
            linkedinUrl:{
                type: String, 
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

 
     
module.exports = mongoose.model('tool', toolsModels)