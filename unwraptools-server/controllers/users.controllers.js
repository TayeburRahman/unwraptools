 
const { generateToken } = require("../utils/token");
let bcrypt = require("bcryptjs");
const usersModels = require("../models/users.models");
 


//  response  
const createUsers = async (req, res ) => {  
 
    try {  
      const {email, displayName, photoURL} = req.body   

      const ExistingUser = await usersModels.findOne({
      email: req.body.email
      }); 
      
    if (ExistingUser) { 
      const user = await usersModels.updateOne({email: req.body.email}, {$set:{displayName, photoURL}}) 
      const token = generateToken(user)
      return res.status(200).json({
        user,
        token,
        status: "success",
        message:'User update success'});
    } 

     const user = await usersModels.create({email, displayName, photoURL}) 
     const token = generateToken(user)
     return res.status(200).json({
      user,
      token,
      status: "success",
      message:'User register success'});
   } catch (error) {
     return res.status(500).json({status: "error", message: error})
   }
}

 

 const getUsers = async (req, res) => {  
      try {

        const { email, password } = req.body; 
        
        if(!email ||!password) {
          return res.status(401).json({ 
            status: "error", 
            message: "Email and password are required" }); 
        }
       
        const user = await usersModels.findOne({email}) 
        if(!user) {
          return res.status(401).json({
            status: "error", 
            message: "User not found" 
          }); 
        }
 
   
        const isMatchPassword = await bcrypt.compareSync(password, user.password);
        if(!isMatchPassword) {
          return res.status(401).json({
            status: "error", 
            message: "Password not match"
          })
        }

        if(user.status != "active") {
          return res.status(401).json({
            status: "error", 
            message: "User is not active"
          })
        }

        const token = generateToken(user)

        // IGNORE PASSWORD 
        const {password: pwd, ...others} = user.toObject();

        return res.status(200).send({
          status:"success",
          user: others,
          token,
          message:"User Login Successful"
      }) 
      } catch (error) {
        return res.status(401).json({status: "error" , message: error.massages})
      }
  }




  const getAllUsers = async (req, res) => {  
    try { 
     const user = await  usersModels.find({})  

      return res.status(200).send(user) 
     } catch (error) {
      return res.status(401).json({status: "error", message: error.massages})
    }
} 

const getAdminOne = async (req, res) => {  
  
  try { 
    const {email} = req.params;   
 
   const admin = await  usersModels.findOne({ $and: [{role: "admin"}, { email }]})  

   return res.status(200).json({
    admin,
    status: "success",
    message: "Successfully",
  });
   } catch (error) {
    return res.status(401).json({status: "error", message: error.massages})
  }
} 


const getUserOne = async (req, res) => {  
  
  try { 
    const {email} = req.params;   
 
   const user = await  usersModels.findOne({ email })  

  //  console.log('admin',admin)

   return res.status(200).json({
    user,
    status: "success",
    message: "Successfully",
  });
   } catch (error) {
    return res.status(401).json({status: "error", message: error.massages})
  }
} 

 
 
 
  module.exports={  createUsers, getUsers, getAllUsers, getAdminOne, getUserOne }