const newsModels = require("../models/news.models");

const createNews = async (req, res) => {
  try {
    const { news_name, contentLink, user_email, categories, imageURL } =
      req?.body;

    const news = await newsModels.create({
      news_name,
      contentLink,
      user_email,
      categories,
      imageURL,
    });

    return res.status(200).json({
      news,
      status: "success",
      message: "news Add Success",
    });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error });
  }
};

const findInactiveNews = async (req, res) => {
  try {
    const news = await newsModels.find({ status: "inactive" });
    return res.status(200).json({
      news,
      status: "success",
      message: "Inactive news Find Success",
    });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error });
  }
};



const getUserActiveNews = async (req, res) => {
  try {
    const { email } = req.params;
    // const news = await newsModels.find({ user_email: email });
    const active = await newsModels.find({$and: [{ user_email: email },{status: 'active'}]});
    // const inactive = await newsModels.find({$and: [{ user_email: email },{status: 'inactive'}]});

    return res.status(200).json({
     
      active,
      status: "success",
      message: "active news Find Success",
    });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error });
  }
};


const getUserInactiveNews = async (req, res) => {
  try {
    const { email } = req.params;
    // const news = await newsModels.find({ user_email: email });
    // const active = await newsModels.find({$and: [{ user_email: email },{status: 'active'}]});
    const inactive = await newsModels.find({$and: [{ user_email: email },{status: 'inactive'}]});

    return res.status(200).json({
     
      inactive,
      status: "success",
      message: "Inactive news Find Success",
    });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error });
  }
};


const getUserNews = async (req, res) => {
  try {
    const { email } = req.params;
    const news = await newsModels.find({ user_email: email });
    // const active = await newsModels.find({$and: [{ user_email: email },{status: 'active'}]});
    // const inactive = await newsModels.find({$and: [{ user_email: email },{status: 'inactive'}]});

    return res.status(200).json({
     
      news,
      status: "success",
      message: "news Find Success",
    });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error });
  }
};
  
 

const findNews = async (req, res) => {
  try {
    const { getId } = req.params;
 
    const news = await newsModels.findOne({ _id: getId });
    return res.status(200).json({
      news,
      status: "success",
      message: "Inactive News Find Success",
    });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error });
  }
};


const UpdateNews = async (req, res) => {
  try {
    const { getId } = req.params;

    const { news_name, contentLink  } = req.body; 
    
 
    const tools = await newsModels.updateOne((
      { _id: getId },
      { $set: {news_name, contentLink }}
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

const approveNews = async (req, res) => {
  try {
    const { approveId } = req.params;
    const tool = await newsModels.updateOne(
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


const ClickInactiveNews = async (req, res) => {
  try {
    const { inactiveId } = req.params;
    const news = await newsModels.updateOne(
      { _id: inactiveId },
      { $set: { status: "inactive" } }
    );
 
    return res.status(200).json({
      news,
      status: "success",
      message: "News Inactive Successfully",
    });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error });
  }
};

const deleteNews = async (req, res) => {
  try {
    const { deleteId } = req.params;

    
    const tool = await newsModels.deleteOne({ _id: deleteId });
    return res.status(200).json({
      tool,
      status: "success",
      message: "Tools Delete Successfully",
    });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error });
  }
};

const findActiveNews = async (req, res) => {
  const category = req?.query?.category;
  const range = req?.query?.range;
  const sort = req?.query?.sort;

  const getQuery = () => {
    if (category) {
      return {
        categories: { $in: [category] },
      };
    }

    return;
  };

  const getRange = () => {
    const today = new Date();
    // db.collection.find({ dateField: { $gte: sevenDaysAgo, $lte: today } })
    if (range === "Today") {
   
      const todayy = new Date();
      todayy.setHours(0, 0, 0, 0);
      return {
        createdAt: {
          $gte: todayy,
          $lt: new Date(Number(todayy.getTime()) + 24 * 60 * 60 * 1000), // set the end time to the next day
        },
      };
    } else if (range === "This Week") {
 
      const sevenDaysAgo = new Date(Number(today.getTime()) - 7 * 24 * 60 * 60 * 1000); // 7 days ago
      return {
        createdAt: {
          $gte: sevenDaysAgo,
          $lt: today
        },
      }
      
    } else if (range === "This Month") {
   
      const thirtyDaysAgo = new Date(Number(today.getTime()) - 30 * 24 * 60 * 60 * 1000); // 7 days ago
      return {
        createdAt: {
          $gte: thirtyDaysAgo,
          $lt: today
        },
      }
    }else{
      return 
    }
  };

  try {
    let news = [];

    if (category && range) {
      news = await newsModels
        .find({ status: "active" })
        .find(getQuery())
        .find(getRange())
        .sort({ createdAt: -1 });
    } else if (category) {
      news = await newsModels
        .find({ status: "active" })
        .find(getQuery())
        .sort({ createdAt: -1 });
    } else if (range) {
      news = await newsModels
        .find({ status: "active" })
        .find(getRange())
        .sort({ createdAt: -1 });
      }else{
      news = await newsModels
        .find({ status: "active" })
        .sort({ createdAt: -1 });
    }

    if (sort) {

      if (sort === "popular") {
        const sortData = await [...news].sort((a, b) => {
          // console.log("a is : ", a);
          return Number(a.favourite.length) - Number(b.favourite.length);
        });
        news = sortData?.slice(0)?.reverse();
      } else if (sort === "featured") {
        const sortData = await [...news].sort((a, b) => {
          return Number(a.favourite.length) - Number(b.favourite.length);
        });
        news = sortData?.slice(0)?.reverse();
      } else if (sort === "new") {
        // const newNews = await news.filter((d) => {
        //   // console.log("map date is : ", new Date(d?.createdAt));
        //   const currentDate = new Date();
        //   const sevenDaysAgo = new Date(
        //     Number(currentDate.getTime()) - 7 * 24 * 60 * 60 * 1000
        //   );
        //   // console.log("seven day ago is : ", sevenDaysAgo);
        //   return new Date(d?.createdAt) >= sevenDaysAgo;
        // });

        const newNews = [...news]
        news = newNews.slice(0)?.reverse(); 
      }
    }

    return res.status(200).json({
      news,
      status: "success",
      message: "Active news Find Success",
    });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error });
  }
};

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

    const createdAt = news.createdAt.getTime(); 
    const now = Date.now();
    const diffInMillis = now - createdAt;

    // calculate time difference in hours
    const hours = Math.floor(diffInMillis / (1000 * 60 * 60));

    // calculate time difference in days
    const days = Math.floor(hours / 24);
    const remainingHours = hours % 24;


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

module.exports = {
  createNews,
  findInactiveNews,
  approveNews,
  deleteNews,
  findNews,
  findActiveNews,
  BookmarkExistingUser,
  BookmarkNews,
  BookmarkUserData,
  NewsGetTime,
  getUserNews,
  getUserActiveNews,
  getUserInactiveNews,
  UpdateNews,
  ClickInactiveNews
};
