const mongoose = require('mongoose')
let validator = require("validator");
let bcrypt = require("bcryptjs");


// model step: 1
const suggestModels = new mongoose.Schema(
        {
            tools: {
                type: Object,  
            },
            suggest_user: {
                type: Object, 
                trim: true,
            },   
            text_suggest: {
                type: String, 
                required: true
            }, 
            tools_user:{
                type: String, 
                trim: true,
            },  
        },
        {
             timestamps: true, 
        }
    );
 

 
     
module.exports = mongoose.model('suggest', suggestModels)