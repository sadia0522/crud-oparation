const express =  require("express");
const {getUser,createUser, userLogin} = require('./user.controller');
const router = express.Router();

router.get('/getUser',getUser);
router.post('/createUser',createUser);
router.post('/loginUser',userLogin);


module.exports = router;