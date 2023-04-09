const mongoose = require('mongoose')
let validator = require("validator");
let bcrypt = require("bcryptjs");


// model step: 1
const emailModels = new mongoose.Schema(
        {
            name: {
                type: String, 
                trim: true,
                required:[true, "Email address is require"]
            },
            image: {
                type: Object, 
                trim: true, 
            },
            email: {
                type: String,
                trim: true,
                lowercase: true, 
                required:[true, "Email address is require"]
            },  
            subscribe_time: {
                type: Date,
                default: new Date 
            }
        } 
    );

 
     
module.exports = mongoose.model('email', emailModels)