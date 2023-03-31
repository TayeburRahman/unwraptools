const mongoose = require('mongoose')
let validator = require("validator");
let bcrypt = require("bcryptjs");


// model step: 1
const usersModels = new mongoose.Schema(
        {
            displayName: {
                type: String, 
                trim: true,
            },
            email: {
                type: String,
                trim: true,
                lowercase: true,
                // unique: true,
                // validate:[validator.isEmail, "Provided email is not valid."],
                // required:[true, "Email address is require"]
            }, 
            role:{
                type:String,
                enum:["user", "admin"],
                default: "admin"
            }, 
            photoURL: {
                type: String,
                validate:[validator.isURL, "Provided image URL is not valid."], 
            },
            
            status:{
                type: String,
                default:"active",
                enum:["active", "inactive"]
            },
            passwordChangeAt:Date,
            passwordRestToken:String,
            passwordTokenExpires:Date, 
        },
        {
             timestamps: true, 
        }
    );

 
     
module.exports = mongoose.model('users', usersModels)