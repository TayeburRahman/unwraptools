const { createTool,   approveTool, findInactiveTool, deleteTool, findTool, ToolsSearchFilter, findActiveTool, addBookmarkTool, removeBookmarkTool } = require("../controllers/tools.controllers"); 
const verifyToken = require("../middleware/verifyToken");

const router = require("express").Router();

router.route('/create').post(createTool); 
router.route('/getallTools').get(findInactiveTool);
router.route('/getActiveTool').get(findActiveTool);
router.route('/getTools/:getId').get(findTool); 
router.route('/approveTool/:approveId').put(approveTool);
router.route('/deleteTool/:deleteId').put(deleteTool);
router.route('/addbookmark/:toolId').put(addBookmarkTool);
router.route('/removebookmark/:toolId').put(removeBookmarkTool);

 

 

router.route('/get/filter/:id').get(ToolsSearchFilter);
router.route('/get/filter').get(ToolsSearchFilter);
 
 

module.exports = router;