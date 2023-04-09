const emailModels = require("../models/email.models");

const createEmail = async (req, res) => {
    try {
      const { email, user } = req?.body; 

      const name = user?.displayName
      const image = user?.photoURL
   
      const response = await emailModels.create({ email, image , name });
  
      return res.status(200).json({
        response,
        status: "success",
        message: "Email Add Success",
      });
    } catch (error) {
      return res.status(500).json({ status: "error", message: error });
    }
  };
  
  const findEmail = async (req, res) => {
    try {
      const response = await emailModels.find({ });
      
      return res.status(200).json({
        response, 
        status: "success",
        message: "findEmail Success",
      });
    } catch (error) {
      return res.status(500).json({ status: "error", message: error });
    }
  };
  

  module.exports = {
    createEmail,
    findEmail
  };