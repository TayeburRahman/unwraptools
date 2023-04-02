const newsModels = require("../models/news.models");

const createNews = async (req, res ) => {   
    try {  
      const {news_name, contentLink, user_email, categories, imageURL } = req?.body   
 
      console.log(news_name, contentLink, user_email, categories)
      const news = await  newsModels.create({news_name, contentLink, user_email, categories, imageURL})  
       
     return res.status(200).json({ 
        news,
      status: "success",
      message:'news Add Success'});
   } catch (error) {
     return res.status(500).json({status: "error", message: error})
   }


} 

const findInactiveNews = async (req, res ) => {   
  try {   
    const news = await  newsModels.find({status: "inactive"})   
   return res.status(200).json({ 
    news,
    status: "success",
    message:'Inactive news Find Success'});
 } catch (error) {
   return res.status(500).json({status: "error", message: error})
 }
}

const findNews = async (req, res ) => {   
  try {   
    const {getId} = req.params 

    console.log('dddd', getId)
    const tools = await  newsModels.findOne({_id: getId})   
   return res.status(200).json({ 
    tools,
    status: "success",
    message:'Inactive Tools Find Success'});
 } catch (error) {
   return res.status(500).json({status: "error", message: error})
 }
}

const approveNews = async (req, res ) => {   
  try {   
    const {approveId} = req.params 
    const tool = await  newsModels.updateOne({_id: approveId}, {$set:{status: "active"}})   
    
    console.log(approveId)
   return res.status(200).json({ 
    tool,
    status: "success",
    message:'Tools Active Successfully'});
 } catch (error) {
   return res.status(500).json({status: "error", message: error})
 }
 
}


const deleteNews = async (req, res ) => {   
  try {   
    const {deleteId} = req.params 

    console.log(deleteId)
    const tool = await  newsModels.deleteOne({_id: deleteId})   
   return res.status(200).json({ 
    tool,
    status: "success",
    message:'Tools Delete Successfully'});
 } catch (error) {
   return res.status(500).json({status: "error", message: error})
 } 
}


const findActiveNews = async (req, res ) => {   
  try {   
    const news = await  newsModels.find({status: "active"})   
   return res.status(200).json({ 
    news,
    status: "success",
    message:'Active news Find Success'});
 } catch (error) {
   return res.status(500).json({status: "error", message: error})
 }
}


module.exports={ createNews, findInactiveNews,approveNews, deleteNews, findNews, findActiveNews }