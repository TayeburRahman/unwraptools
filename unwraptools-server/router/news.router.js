 
const { createNews, findInactiveNews, findNews, deleteNews, approveNews } = require("../controllers/news.controllers");
const verifyToken = require("../middleware/verifyToken");

const router = require("express").Router();

router.route('/create').post(createNews); 
router.route('/getallNews').get(findInactiveNews);
router.route('/getNews/:getId').get(findNews); 
router.route('/approveNews/:approveId').put(approveNews);
router.route('/deleteNews/:deleteId').put(deleteNews);

// router.route('/get/filter').get(ToolsSearchFilter);
 
 

module.exports = router;