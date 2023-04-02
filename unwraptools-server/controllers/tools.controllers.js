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

const findByCategoryTool = async (req, res) => {
  try {
    const { category } = req.body; 
    const data = category[0].toString(); 
    const tools = await toolsModels.find({ categories: data}); 
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
 
const searchTools = async (req, res) => {
  const query = req.query.q; // the search query passed in the request URL
  try {
    const tools = await toolsModels.find({
      tool_name: { $regex: query, $options: "i" },
    }); // search for documents that match the query
    //   res.json(results);

    return res.status(200).json({
      tools,
      status: "success",
      message: "Inactive Tools Find Success",
    });
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
      console.log("called from both")
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
      console.log("sort is : ", req?.query?.sort);

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
        const newTools = await tools.filter((d) => {
          // console.log("map date is : ", new Date(d?.createdAt));
          const currentDate = new Date();
          const sevenDaysAgo = new Date(
            Number(currentDate.getTime()) - 7 * 24 * 60 * 60 * 1000
          );
          // console.log("seven day ago is : ", sevenDaysAgo);
          return new Date(d?.createdAt) >= sevenDaysAgo;
        });

        tools = newTools;
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
// const ToolsSearchFilter = async (req, res) => {
//   // Waitlist,Mobile App,API,Browser Extension,Open Source,Discord Community,No Signup Required
//   //--------------------------------------------------------------
//   //CATEGORY ID
//   //   const params = req?.params?.id;

//   let categories = [];

//   if (req.query.art) {
//     categories.push("Art");
//   }
//   if (req.query.audio_editing) {
//     categories.push("Audio Edting");
//   }
//   if (req.query.paid) {
//     categories.push("Paid");
//   }
//   if (req.query.contact_for_pricing) {
//     categories.push("Contact for Pricing");
//   }

//   //--------------------------------------------------------------
//   //FEATURES FILTER

//   let featuresFilter = [];

//   if (req.query.mobile_app) {
//     featuresFilter.push("Mobile App");
//   }
//   if (req.query.waitlist) {
//     featuresFilter.push("Waitlist");
//   }
//   if (req.query.api) {
//     featuresFilter.push("API");
//   }
//   if (req.query.browser_extension) {
//     featuresFilter.push("Browser Extension");
//   }
//   if (req.query.open_source) {
//     featuresFilter.push("Open Source");
//   }
//   if (req.query.discord_community) {
//     featuresFilter.push("Discord Community");
//   }
//   if (req.query.no_signup) {
//     featuresFilter.push("No Signup Required");
//   }

//   //--------------------------------------------------------------
//   // PRICING FILTER

//   let pricingFilter = [];

//   if (req.query.free) {
//     pricingFilter.push("Free");
//   }
//   if (req.query.free_trial) {
//     pricingFilter.push("Free Trial");
//   }
//   if (req.query.contact_for_pricing) {
//     pricingFilter.push("Contact for Pricing");
//   }
//   if (req.query.freemium) {
//     pricingFilter.push("Freemium");
//   }
//   if (req.query.paid) {
//     pricingFilter.push("Paid");
//   }
//   if (req.query.deals) {
//     pricingFilter.push("Deals");
//   }

//   //--------------------------------------------------------------

//   const getQuery = () => {
//     if (pricingFilter?.length > 0 && featuresFilter?.length > 0) {
//       return {

//         features: { $in: [featuresFilter] } ,
//         price: { $in: [pricingFilter] }

//       };
//     } else if (featuresFilter?.length > 0) {
//       console.log(" filters is : ", pricingFilter, featuresFilter);
//       return {
//         features: { $in:featuresFilter },
//         // features: { $in: featuresFilter },
//       };
//     } else if (pricingFilter?.length > 0) {
//       return {
//         price: { $in: pricingFilter },
//       };
//     } else {
//       return;
//     }
//   };

//   const getParams = () => {
//     return {
//       categories: { $in: categories },
//     };
//   };

//   try {
//     let tools = [];
//     // if (categories.length > 0) {
//     //   // console.log("params id is : ", paramsId);
//     //   tools = await toolsModels
//     //     .find({ status: "active" })
//     //     .find({ $and: [{ status: "active" }, { ...getParams() }] })
//     //     .find(getQuery());
//     // } else {
//     //   tools = await toolsModels.find({features: { $in: ["API"] }});
//     // }
//     tools = await toolsModels.find();

//     console.log("tools is : ", tools)

//     // if (req?.query?.sort) {
//     //   console.log("sort is : ", req?.query?.sort);

//     //   if (req?.query?.sort === "popular") {
//     //     const sortData = await [...tools].sort((a, b) => {
//     //       // console.log("a is : ", a);
//     //       return Number(a.favourite.length) - Number(b.favourite.length);
//     //     });
//     //     tools = sortData?.slice(0)?.reverse();
//     //   } else if (req?.query?.sort === "verified") {
//     //     const sortData = await [...tools].sort((a, b) => {
//     //       return Number(a.favourite.length) - Number(b.favourite.length);
//     //     });
//     //     tools = sortData?.slice(0)?.reverse();
//     //   } else if (req?.query?.sort === "new") {
//     //     const newTools = await tools.filter((d) => {
//     //       // console.log("map date is : ", new Date(d?.createdAt));
//     //       const currentDate = new Date();
//     //       const sevenDaysAgo = new Date(
//     //         Number(currentDate.getTime()) - 7 * 24 * 60 * 60 * 1000
//     //       );
//     //       // console.log("seven day ago is : ", sevenDaysAgo);
//     //       return new Date(d?.createdAt) >= sevenDaysAgo;
//     //     });

//     //     tools = newTools;
//     //   }
//     // }

//     return res.status(200).json({
//       tools,
//       status: "success",
//       message: "Inactive Tools Find Success",
//     });

//     // res.send({ status: "success", result: tools });
//   } catch (err) {
//     res.status(500).json({ massages: "Internal Server Error" });
//   }
// };

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
  findByCategoryTool
};
