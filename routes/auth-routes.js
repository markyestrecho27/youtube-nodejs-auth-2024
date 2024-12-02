const express =require('express');
const router = express.Router();
const {registerUser,loginUser,changePassword} = require('../controllers/auth-controller.js');
const authMiddleware = require('../middleware/auth-middleware.js');




//all routes are related to authentication and authorization

router.post('/register',registerUser);
router.post('/login',loginUser);
router.post('/change-password',authMiddleware,changePassword);






module.exports = router;