 
const { BookmarkExistingUser } = require("../controllers/news.controllers");
const { createUsers, getUsers, getAllUsers } = require("../controllers/users.controllers");
const verifyToken = require("../middleware/verifyToken");

const router = require("express").Router();

router.route('/signup').post(createUsers);
router.route('/login').post(getUsers);
router.route('/getByAllUsers').get(getAllUsers);
 

 

module.exports = router;