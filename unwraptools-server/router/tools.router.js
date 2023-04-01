const { createTool,   approveTool, findInactiveTool, deleteTool, findTool, ToolsSearchFilter, findActiveTool, addBookmarkTool, removeBookmarkTool, BookmarkTool } = require("../controllers/tools.controllers"); 
const verifyToken = require("../middleware/verifyToken");

const router = require("express").Router();

router.route('/create').post(createTool); 
router.route('/getallTools').get(findInactiveTool);
router.route('/getActiveTool').get(findActiveTool);
router.route('/getTools/:getId').get(findTool); 
router.route('/approveTool/:approveId').put(approveTool);
router.route('/deleteTool/:deleteId').put(deleteTool);
router.route('/bookmark/:toolId').put(BookmarkTool); 

 

 

router.route('/get/filter').get(ToolsSearchFilter);
 
 

module.exports = router;