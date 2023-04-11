 
 
const { createUsers, getUsers, getAllUsers, getAdminOne, getUserOne } = require("../controllers/users.controllers");
 

const router = require("express").Router();

router.route('/signup').post(createUsers);
router.route('/login').post(getUsers);
router.route('/admin/:email').get(getAdminOne);
router.route('/getByAllUsers').get(getAllUsers);
router.route('/getUsers/:email').get(getUserOne);

 
 

 

module.exports = router;