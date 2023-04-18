 
const toolsModels = require("../models/tools.models");
const suggestModels = require("../models/suggest.models");

//  response
const createTool = async (req, res) => {
  try {
    const {
      tool_name,
      websiteURL,
      short_description,
      user_email,
      description,
      categories,
      features,
      price,
      startingPrice,
      associated,
      imageURL,
    } = req?.body;

    const tools = await toolsModels.create({
      tool_name,
      user_email,
      websiteURL,
      short_description,
      description,
      categories,
      features,
      price,
      startingPrice,
      associated,
      imageURL,
    });


    return res.status(200).json({
      tools,
      status: "success",
      message: "Tools Add Success",
    });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error });
  }
};

const findInactiveTool = async (req, res) => {
  try {
    const tools = await toolsModels.find({ status: "inactive" });
    return res.status(200).json({
      tools,
      status: "success",
      message: "Inactive Tools Find Success",
    });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error });
  }
};

const findActiveTool = async (req, res) => {
  try {
    const tools = await toolsModels.find({ status: "active" });
    return res.status(200).json({
      tools,
      status: "success",
      message: "Inactive Tools Find Success",
    });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error });
  }
};

const BookmarkTool = async (req, res) => {
  const { email } = req.body;
  try {
    const ExistingUser = await toolsModels.findOne({
      $and: [{ _id: req.params.toolId }, { favourite: email }],
    });

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

      return res.status(201).json({
        response,
        status: "success",
        message: "Tools Remove Bookmark Success",
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
        message: "Tools Add Bookmark Success",
      });
    }
  } catch (error) {
    return res.status(500).json({ status: "error", message: error });
  }
};

const BookmarkExistingUser = async (req, res) => {
  try {
    const email = req.params.email;
    const id = req.params.toolId;

    const ExistingUser = await toolsModels.findOne({
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

const BookmarkUserData = async (req, res) => {
  try {
    const email = req.params.email;

    const tools = await toolsModels.find({ favourite: email });

    return res.status(200).json({
      tools,
      status: "success",
      message: "Bookmark User Data Find Success",
    });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error });
  }
};

const randomGetTool = async (req, res) => {
  try {
    const tools = await toolsModels.find({});
    var randNum = Math.floor(Math.random() * tools?.length) + 1;

    const tool = await tools?.filter((data, idx) => idx === randNum - 1);

    return res.status(200).json({
      tool,
      status: "success",
      message: "Random Num Of Data Find Success",
    });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error });
  }
};

const findTool = async (req, res) => {
  try {
    const { getId } = req.params;
 
    const tools = await toolsModels.findOne({ _id: getId });
    return res.status(200).json({
      tools,
      status: "success",
      message: "Inactive Tools Find Success",
    });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error });
  }
};


const getUserActiveTools = async (req, res) => {
  try {
    const { email } = req.params;   
    // const tools = await toolsModels.find({user_email: email}); 
    const active = await toolsModels.find({$and: [{ user_email: email },{status: 'active'}]});
    // const inactive = await toolsModels.find({$and: [{ user_email: email },{status: 'inactive'}]});
 
    return res.status(200).json({ 
      active, 
      status: "success",
      message: "Successfully Find Tools",
    });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error });
  }
}; 

const getUserInactiveTools = async (req, res) => {
  try {
    const { email } = req.params;   
    // const tools = await toolsModels.find({user_email: email}); 
    // const active = await toolsModels.find({$and: [{ user_email: email },{status: 'inactive'}]});
    const inactive = await toolsModels.find({$and: [{ user_email: email },{status: 'inactive'}]});
 
    return res.status(200).json({ 
      inactive, 
      status: "success",
      message: "Successfully Find Tools",
    });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error });
  }
};

const getUserTools = async (req, res) => {
  try {
    const { email } = req.params;   
    const tools = await toolsModels.find({user_email: email});  
    return res.status(200).json({ 
      tools, 
      status: "success",
      message: "Successfully Find Tools",
    });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error });
  }
};

const UpdateTool = async (req, res) => {
  try {
    const { getId } = req.params;

    const { short_description, tool_name, startingPrice, imageURL, description } = req.body;
 
    const tools = await toolsModels.updateOne((
      { _id: getId },
      { $set: { short_description, tool_name, startingPrice,imageURL, description} }
    ));
    return res.status(200).json({
      tools,
      status: "success",
      message: "Inactive Tools Find Success",
    });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error });
  }
};

const findByCategoryTool = async (req, res) => {
  try {
    const { category } = req.body; 

    console.log(category)
    const data = category[0].toString(); 
    const tools = await toolsModels.find({$and: [{ status: "active" }, {categories: data}]}); 
    return res.status(200).json({
      tools,
      status: "success",
      message: "Inactive Tools Find Success",
    });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error });
  }
};

const approveTool = async (req, res) => {
  try {
    const { approveId } = req.params;
    const tool = await toolsModels.updateOne(
      { _id: approveId },
      { $set: { status: "active" } }
    );

    return res.status(200).json({
      tool,
      status: "success",
      message: "Tools Active Successfully",
    });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error });
  }
};


const ClickInactiveTool = async (req, res) => {
  try {
    const { inactiveId } = req.params;
    const tool = await toolsModels.updateOne(
      { _id: inactiveId },
      { $set: { status: "inactive" } }
    );
 
    return res.status(200).json({
      tool,
      status: "success",
      message: "Tools Active Successfully",
    });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error });
  }
};

const deleteTool = async (req, res) => {
  try {
    const { deleteId } = req.params;

    const tool = await toolsModels.deleteOne({ _id: deleteId });
    return res.status(200).json({
      tool,
      status: "success",
      message: "Tools Delete Successfully",
    });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error });
  }
};
 
const searchTools = async (req, res) => { 
  const search = req.body.search;  
  try { 
    const data = await toolsModels.findOne({ 
      $and: [{status: "active"}, { categories: search }]
      // categories: search
    }); 
    if(data){
      const tools = await toolsModels.find({ 
        $and: [{status: "active"}, {  categories: search }]
      }); 
      return res.status(200).json({
        tools,
        status: "success",
        message: "Inactive Tools Find Success",
      })
    }else{ 
      const tools = await toolsModels.find({
        tool_name: { $regex: search, $options: "i" }, status:"active"
      }); // search for documents that match the query
      //   res.json(results);

      return res.status(200).json({
        tools,
        status: "success",
        message: "Inactive Tools Find Success",
      }); 
    }

 
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const ToolsSearchFilter = async (req, res) => {
  // Waitlist,Mobile App,API,Browser Extension,Open Source,Discord Community,No Signup Required
  //--------------------------------------------------------------
  //CATEGORY ID
  //   const params = req?.params?.id;

  let categories = [];

  if (req.query.art) {
    categories.push("Art");
  }
  if (req.query.audio_editing) {
    categories.push("Audio Edting");
  }
  // if (req.query.paid) {
  //   categories.push("Paid");
  // }
  if (req.query.contact_for_pricing) {
    categories.push("Contact for Pricing");
  }

  //--------------------------------------------------------------
  //FEATURES FILTER

  let featuresFilter = [];

  if (req.query.mobile_app) {
    featuresFilter.push("Mobile App");
  }
  if (req.query.waitlist) {
    featuresFilter.push("Waitlist");
  }
  if (req.query.api) {
    featuresFilter.push("API");
  }
  if (req.query.browser_extension) {
    featuresFilter.push("Browser Extension");
  }
  if (req.query.open_source) {
    featuresFilter.push("Open Source");
  }
  if (req.query.discord_community) {
    featuresFilter.push("Discord Community");
  }
  if (req.query.no_signup) {
    featuresFilter.push("No Signup Required");
  }

  //--------------------------------------------------------------
  // PRICING FILTER

  let pricingFilter = [];

  if (req.query.free) {
    pricingFilter.push("Free");
  }
  if (req.query.free_trial) {
    pricingFilter.push("Free Trial");
  }
  if (req.query.contact_for_pricing) {
    pricingFilter.push("Contact for Pricing");
  }
  if (req.query.freemium) {
    pricingFilter.push("Freemium");
  }
  if (req.query.paid) {
    pricingFilter.push("Paid");
  }
  if (req.query.deals) {
    pricingFilter.push("Deals");
  }

  //--------------------------------------------------------------

  const getQuery = () => {
    if (pricingFilter?.length > 0 && featuresFilter?.length > 0) {

      return {
        $or: [
          { price:{$in: pricingFilter}},
          { features:{ $in: featuresFilter}}
        ]
      };
    } else if (featuresFilter?.length > 0) {
      return {
        features: { $in: featuresFilter },
        // features: { $in: featuresFilter },
      };
    } else if (pricingFilter?.length > 0) {
      return {
        price: { $in: pricingFilter },
      };
    } else {
      return;
    }
  };

  // console.log("filters is : ", pricingFilter, featuresFilter);

  const getParams = () => {
    return {
      categories: { $in: categories },
    };
  };

  try {
    let tools = [];
    if (categories.length > 0) {
      // console.log("params id is : ", paramsId);
      tools = await toolsModels
        .find({ status: "active" })
        .find(getParams())
        .find(getQuery());
    } else {
      // tools = await toolsModels.find(getQuery());
      tools = await toolsModels.find({ status: "active" }).find(getQuery());
    }

    // console.log("tools is : ", tools)

    if (req?.query?.sort) {


      if (req?.query?.sort === "popular") {
        const sortData = await [...tools].sort((a, b) => {
          // console.log("a is : ", a);
          return Number(a.favourite.length) - Number(b.favourite.length);
        });
        tools = sortData?.slice(0)?.reverse();
      } else if (req?.query?.sort === "verified") {
        const sortData = await [...tools].sort((a, b) => {
          return Number(a.favourite.length) - Number(b.favourite.length);
        });
        tools = sortData?.slice(0)?.reverse();
      } else if (req?.query?.sort === "new") { 
        const newTools = [...tools]
        tools = newTools.slice(0)?.reverse();
      }
    }

    return res.status(200).json({
      tools,
      status: "success",
      message: "Inactive Tools Find Success",
    });

    // res.send({ status: "success", result: tools });
  } catch (err) {
    res.status(500).json({ massages: "Internal Server Error" });
  }
}; 

const SuggestEdit = async (req, res) => {
  try {
    const { tools, text_suggest, suggest_user, tools_user } = req.body;  

    const suggest = await suggestModels.create({tools_user, suggest_user, text_suggest, tools}); 

 
    return res.status(200).json({
      suggest,
      status: "success",
      message: "Suggest Edit  Success",
    });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error });
  }
};


const getSuggestEdit = async (req, res) => {
  try {
    const { email } = req.params;  

    const suggest = await suggestModels.find({tools_user: email}); 

 
    return res.status(200).json({
      suggest,
      status: "success",
      message: "Suggest Edit  Success",
    });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error });
  }
};

 
module.exports = {
  createTool,
  findInactiveTool,
  approveTool,
  deleteTool,
  findTool,
  findActiveTool,
  BookmarkTool,
  ToolsSearchFilter,
  BookmarkExistingUser,
  randomGetTool,
  BookmarkUserData,
  searchTools,
  findByCategoryTool,
  SuggestEdit,
  getUserActiveTools,
  UpdateTool,
  getSuggestEdit,
  ClickInactiveTool,
  getUserInactiveTools,
  getUserTools
};
