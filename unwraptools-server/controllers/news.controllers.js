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
    const news = await  newsModels.find({status: "active"}).sort({createdAt: -1}) 
   return res.status(200).json({ 
    news,
    status: "success",
    message:'Active news Find Success'});
 } catch (error) {
   return res.status(500).json({status: "error", message: error})
 }
}

const BookmarkExistingUser = async (req, res) => {
  try {
    const email = req.params.email;
    const id = req.params.newsId;

    const ExistingUser = await newsModels.findOne({
      $and: [{ _id: id }, { favourite: email }],
    });

    return res.status(200).json({
      ExistingUser,
      status: "success",
      message: "ExistingUser Find Success",
    });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error });
  }
};


const BookmarkNews = async (req, res) => {
  const { email } = req.body;
  try {
    const ExistingUser = await newsModels.findOne({
      $and: [{ _id: req.params.newsId }, { favourite: email }],
    });

    if (ExistingUser) {
      const response = await newsModels.findOneAndUpdate(
        { _id: req.params.newsId },
        {
          $pull: {
            favourite: email,
          },
        },
        { returnOriginal: false }
      );

      console.log("response", response);

      return res.status(201).json({
        response,
        status: "success",
        message: "Tools Remove Bookmark Success",
      });
    } else {
      const response = await newsModels.findOneAndUpdate(
        { _id: req.params.newsId },
        {
          $addToSet: {
            favourite: email,
          },
        },
        { returnOriginal: false }
      );

      return res.status(200).json({
        response,
        status: "success",
        message: "Tools Add Bookmark Success",
      });
    }
  } catch (error) {
    return res.status(500).json({ status: "error", message: error });
  }
};


const BookmarkUserData = async (req, res) => {
  try {
    const email = req.params.email;

    const news = await newsModels.find({ favourite: email });

    return res.status(200).json({
      news,
      status: "success",
      message: "Bookmark User Data Find Success",
    });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error });
  }
};

const NewsGetTime = async (req, res) => {
  try {
    const id = req.params.id;

    const news = await newsModels.findOne({ _id: id });

    const createdAt = news.createdAt.getTime(); // assuming the createdAt field stores the document's creation time
    const now = Date.now();
    const diffInMillis = now - createdAt;

    // calculate time difference in hours
    const hours = Math.floor(diffInMillis / (1000 * 60 * 60)); 

    // calculate time difference in days
    const days = Math.floor(hours / 24);
    const remainingHours = hours % 24;
 
    console.log(  remainingHours)

    return res.status(200).json({
      days,
      remainingHours,
      status: "success",
      message: "Bookmark User Data Find Success",
    });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error });
  }
};


module.exports={ createNews, findInactiveNews,approveNews, deleteNews, findNews, findActiveNews, BookmarkExistingUser, BookmarkNews, BookmarkUserData, NewsGetTime}