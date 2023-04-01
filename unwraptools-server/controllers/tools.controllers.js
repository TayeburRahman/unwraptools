const { generateToken } = require("../utils/token");
const toolsModels = require("../models/tools.models");



//  response  
const createTool = async (req, res) => {
  try {
    const { tool_name, websiteURL, short_description, user_email, description, categories, features, price, startingPrice, associated, imageURL } = req?.body

    const tools = await toolsModels.create({ tool_name, user_email, websiteURL, short_description, description, categories, features, price, startingPrice, associated, imageURL })

    console.log(tools)
    return res.status(200).json({
      tools,
      status: "success",
      message: 'Tools Add Success'
    });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error })
  }


}

const findInactiveTool = async (req, res) => {
  try {
    const tools = await toolsModels.find({ status: "inactive" })
    return res.status(200).json({
      tools,
      status: "success",
      message: 'Inactive Tools Find Success'
    });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error })
  }
}

const findActiveTool = async (req, res) => {
  try {
    const tools = await toolsModels.find({ status: "active" })
    return res.status(200).json({
      tools,
      status: "success",
      message: 'Inactive Tools Find Success'
    });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error })
  }
}


const BookmarkTool = async (req, res) => { 
  const { email } = req.body;
  try { 
    const ExistingUser = await toolsModels.findOne({ $and: [{_id:req.params.toolId}, {favourite: email}]}); 

    if (ExistingUser) {
      const response = await toolsModels.findOneAndUpdate(
        { _id: req.params.toolId },
        {
          $pull: {
            favourite: email,
          },
        },
        { returnOriginal: false }
      );

      console.log("response", response)

      return res.status(200).json({
        response,
        status: "success",
        message: 'Tools Remove Bookmark Success'
      }); 
      
    } else { 

      const response = await toolsModels.findOneAndUpdate(
        { _id: req.params.toolId },
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
        message: 'Tools Add Bookmark Success'
      });

    }

  } catch (error) {
    return res.status(500).json({ status: "error", message: error })
  }
}


const removeBookmarkTool = async (req, res) => {

  const { email } = req.body;
  try {


  } catch (error) {
    return res.status(500).json({ status: "error", message: error })
  }
}


const findTool = async (req, res) => {
  try {
    const { getId } = req.params

    console.log('dddd', getId)
    const tools = await toolsModels.findOne({ _id: getId })
    return res.status(200).json({
      tools,
      status: "success",
      message: 'Inactive Tools Find Success'
    });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error })
  }
}

const approveTool = async (req, res) => {
  try {
    const { approveId } = req.params
    const tool = await toolsModels.updateOne({ _id: approveId }, { $set: { status: "active" } })

    console.log(approveId)
    return res.status(200).json({
      tool,
      status: "success",
      message: 'Tools Active Successfully'
    });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error })
  }
}

const deleteTool = async (req, res) => {
  try {
    const { deleteId } = req.params

    console.log(deleteId)
    const tool = await toolsModels.deleteOne({ _id: deleteId })
    return res.status(200).json({
      tool,
      status: "success",
      message: 'Tools Delete Successfully'
    });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error })
  }
}



const ToolsSearchFilter = async (req, res) => {

  try {


  } catch (err) {

    res.status(500).json({ massages: "Internal Server Error" });
  }
}

module.exports = { createTool, findInactiveTool, approveTool, deleteTool, findTool, findActiveTool, BookmarkTool, ToolsSearchFilter, removeBookmarkTool }