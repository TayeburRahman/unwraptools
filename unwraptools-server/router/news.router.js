 
const { createNews, findInactiveNews, findNews, deleteNews, approveNews, findActiveNews, BookmarkExistingUser,  BookmarkNews, BookmarkUserData, NewsGetTime, findUserNews, UpdateNews, ClickInactiveNews, getUserActiveNews, getUserInactiveNews, getUserNews } = require("../controllers/news.controllers");
const { getUserActiveTools, getUserInactiveTools, getUserTools } = require("../controllers/tools.controllers");
const verifyToken = require("../middleware/verifyToken");

const router = require("express").Router();

router.route('/create').post(createNews); 
router.route('/getallNews').get(findInactiveNews);


router.route('/user/active/:email').get(getUserActiveNews);
router.route('/user/inactive/:email').get(getUserInactiveNews);
router.route('/user/news/:email').get(getUserNews); 



router.route('/getActiveNews').get(findActiveNews);
router.route('/inactive/:inactiveId').put(ClickInactiveNews);
router.route('/getNews/:getId').get(findNews); 
router.route('/updateNews/:getId').put(UpdateNews); 
router.route('/approveNews/:approveId').put(approveNews);
router.route('/deleteNews/:deleteId').put(deleteNews);
router.route('/bookmark/existingUser/:newsId/:email').get(BookmarkExistingUser); 
router.route('/bookmark/:newsId').put(BookmarkNews); 
router.route('/bookmark/user/:email').get(BookmarkUserData); 
router.route('/gettime/:id').get(NewsGetTime); 

// gettime


 
 
// router.route('/get/filter').get(ToolsSearchFilter);
  

module.exports = router;