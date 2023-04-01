const { generateToken } = require("../utils/token");
const toolsModels = require("../models/tools.models");

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

    console.log(tools);
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

const addBookmarkTool = async (req, res) => {
  const { email } = req.body;
  try {
    const response = await toolsModels.findOneAndUpdate(
      { _id: req.params.toolId },
      {
        $addToSet: {
          favourite: email,
        },
      },
      { returnOriginal: false }
    );

    const bookMark = await toolsModels.updateOne(
      { _id: req.params.toolId },
      { $set: { bookMark: true } }
    );

    return res.status(200).json({
      response,
      bookMark,
      status: "success",
      message: "Tools Add Bookmark Success",
    });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error });
  }
};

const removeBookmarkTool = async (req, res) => {
  const { email } = req.body;
  try {
    const response = await toolsModels.findOneAndUpdate(
      { _id: req.params.toolId },
      {
        $pull: {
          favourite: email,
        },
      },
      { returnOriginal: false }
    );

    const bookMark = await toolsModels.updateOne(
      { _id: req.params.toolId },
      { $set: { bookMark: false } }
    );

    return res.status(200).json({
      response,
      bookMark,
      status: "success",
      message: "Tools Remove Bookmark Success",
    });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error });
  }
};

const findTool = async (req, res) => {
  try {
    const { getId } = req.params;

    console.log("dddd", getId);
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

const approveTool = async (req, res) => {
  try {
    const { approveId } = req.params;
    const tool = await toolsModels.updateOne(
      { _id: approveId },
      { $set: { status: "active" } }
    );

    console.log(approveId);
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

    console.log(deleteId);
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

const ToolsSearchFilter = async (req, res) => {
  // Waitlist,Mobile App,API,Browser Extension,Open Source,Discord Community,No Signup Required

  const params = req?.params?.id;

  let paramsId = [];

  if (params) {
    if (params === "free") {
      paramsId.push("Free");
    }
    if (params === "art") {
      paramsId.push("Art");
    }
    if (params === "audio_editing") {
      paramsId.push("Audio Edting");
    }
    if (params === "paid") {
      paramsId.push("Paid");
    }
    if (params === "contact_for_pricing") {
      paramsId.push("Contact for Pricing");
    }
    if (params === "deals") {
      paramsId.push("Deals");
    }
  }

  console.log("params is : ", params);
  console.log("paramId is : ", paramsId);

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
  // pricing filter

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

  console.log("features filter is : ", featuresFilter);
  console.log("pricing filter is : ", pricingFilter);

  const getQuery = () => {
    if (pricingFilter?.length > 0 && featuresFilter?.length > 0) {
      return {
        features: { $in: featuresFilter },
        price: { $in: pricingFilter },
      };
    } else if (featuresFilter?.length > 0) {
      return {
        features: { $in: featuresFilter },
      };
    } else if (pricingFilter?.length > 0) {
      return {
        price: { $in: pricingFilter },
      };
    } else {
      return;
    }
  };

  try {
    const query = {
      features: { $in: featuresFilter },
      price: { $in: pricingFilter },
    };

    // const fFilter = featuresFilter.length > 0 &&  {features: { $in: featuresFilter }}

    let tools = [];
    if (paramsId.length > 0) {
      tools = await toolsModels
        .find({ categories: { $in: paramsId } })
        .find(getQuery());
    } else {
      tools = await toolsModels.find(getQuery());
    }

    if (req?.query?.sort) {
      console.log("sort is : ", req?.query?.sort);

      if (req?.query?.sort === "popular") {
        const sortData = await [...tools].sort((a, b) => {
          console.log("a is : ", a);
          return Number(a.favourite.length) - Number(b.favourite.length);
        });
        tools = sortData;
      } else if (req?.query?.sort === "verified") {
        const sortData = await [...tools].sort((a, b) => {
          console.log("a is : ", a);
          return Number(a.favourite.length) - Number(b.favourite.length);
        });
        tools = sortData;
      } else if (req?.query?.sort === "new") {
        //  return
      }
    }

    res.send({ status: "success", result: tools?.slice(0)?.reverse() });

    //   if (pricingFilter?.length > 0) {
    //   const tools = await toolsModels.find({ price: { $in: pricingFilter } });
    //   res.send({ status: "success", result: tools });
    // } else if (featuresFilter?.length > 0) {
    //   const tools = await toolsModels
    //     .find({
    //       categories: { $in: [params] },
    //     })
    //     .find({
    //       features: { $in: featuresFilter },
    //     });

    //   const sortedArray = await [...tools].sort((a, b) => {
    //     console.log("a is : ", a);
    //     return Number(a.favourite.length) - Number(b.favourite.length);
    //   });

    //   // var sortedArray = array.sort(function(a, b) { return a - b; });

    //   res.send({ status: "success", result: sortedArray });
    // } else {
    //   const tools = await toolsModels.find();
    //   const sortedArray = await [...tools].sort((a, b) => {
    //     console.log("a is : ", a);
    //     return Number(a.favourite.length) - Number(b.favourite.length);
    //   });
    //   res.send({ status: "success", result: sortedArray?.slice(0)?.reverse() });
    // }

    // if (pricingFilter?.length > 0 || featuresFilter?.length > 0) {
    //   console("I'm called from query ");
    // } else {
    //   console("I'm called from no query ");
    //   const tools = await toolsModels.find();
    //   res.send({ status: "success", result: tools });
    // }
  } catch (err) {
    res.status(500).json({ massages: "Internal Server Error" });
  }
};

module.exports = {
  createTool,
  findInactiveTool,
  approveTool,
  deleteTool,
  findTool,
  findActiveTool,
  addBookmarkTool,
  ToolsSearchFilter,
  removeBookmarkTool,
};
