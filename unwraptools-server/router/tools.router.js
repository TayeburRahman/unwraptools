const { createTool,   approveTool, findInactiveTool, deleteTool,searchTools, findTool, ToolsSearchFilter, findActiveTool, BookmarkTool, BookmarkExistingUser, BookmarkUserData, randomGetTool, findByCategoryTool, SuggestEdit, getUserTools, UpdateTool, getSuggestEdit, ClickInactiveTool, getUserActiveTools, getUserInactiveTools } = require("../controllers/tools.controllers");  

const router = require("express").Router();

router.route('/create').post(createTool); 
router.route('/getallTools').get(findInactiveTool);
router.route('/getActiveTool').get(findActiveTool);
router.route('/getTools/:getId').get(findTool); 
router.route('/updateTools/:getId').put(UpdateTool); 

router.route('/approveTool/:approveId').put(approveTool);
router.route('/inactive/:inactiveId').put(ClickInactiveTool);

 
router.route('/deleteTool/:deleteId').put(deleteTool);
router.route('/bookmark/:toolId').put(BookmarkTool); 
router.route('/bookmark/existingUser/:toolId/:email').get(BookmarkExistingUser); 
router.route('/bookmark/user/:email').get(BookmarkUserData); 
router.route('/randomTool').get(randomGetTool); 
router.route('/get/categorys').put(findByCategoryTool); 
 

 
router.route('/get/search').put(searchTools); 
router.route('/suggestedit').post(SuggestEdit);
router.route('/get/suggestedit/:email').get(getSuggestEdit);
router.route('/get/filter/:id').get(ToolsSearchFilter);
router.route('/get/filter').get(ToolsSearchFilter);  
router.route('/user/active/:email').get(getUserActiveTools);
router.route('/user/inactive/:email').get(getUserInactiveTools);
router.route('/user/tool/:email').get(getUserTools); 

 
 


module.exports = router;