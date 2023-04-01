const { createTool,   approveTool, findInactiveTool, deleteTool, findTool, ToolsSearchFilter, findActiveTool, addBookmarkTool, removeBookmarkTool, BookmarkTool, BookmarkExistingUser, BookmarkUserData, randomGetTool } = require("../controllers/tools.controllers"); 
const verifyToken = require("../middleware/verifyToken");

const router = require("express").Router();

router.route('/create').post(createTool); 
router.route('/getallTools').get(findInactiveTool);
router.route('/getActiveTool').get(findActiveTool);
router.route('/getTools/:getId').get(findTool); 
router.route('/approveTool/:approveId').put(approveTool);
router.route('/deleteTool/:deleteId').put(deleteTool);
router.route('/bookmark/:toolId').put(BookmarkTool); 
router.route('/bookmark/existingUser/:toolId/:email').get(BookmarkExistingUser); 
router.route('/bookmark/user/:email').get(BookmarkUserData); 
router.route('/randomTool').get(randomGetTool); 

 
 
router.route('/get/filter').get(ToolsSearchFilter);
 
 

module.exports = router;