const express = require('express');
const authMiddleware = require('../middleware/auth-middleware.js');
const adminMiddleware = require('../middleware/admin-middleware.js');
const uploadMiddleware = require('../middleware/upload-middleware.js');
const {uploadImageController,fetchImagesController,deleteImageController} = require('../controllers/image-controller.js');

const router = express.Router();


router.post('/upload',authMiddleware,adminMiddleware,uploadMiddleware.single('image'),uploadImageController);
router.get('/get',authMiddleware,fetchImagesController);
router.delete('/:id',authMiddleware,adminMiddleware,deleteImageController);


module.exports = router;

//67442ec13c16ac2bc1e98835