 
const { createEmail, findEmail } = require("../controllers/email.controllers"); 
 

const router = require("express").Router();

router.route('/create').post(createEmail);
router.route('/get').get(findEmail); 

 
 

 

module.exports = router;