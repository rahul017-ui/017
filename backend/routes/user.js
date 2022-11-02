const router = require("express").Router();
const userController = require('../controllers/user');
const upload = require('../middleware/xlsxand csv');
const authrouter=require('../routes/auth/auth');
const auth=require('../routes/auth/auth.controller')



router.use('/auth',authrouter);
router.post('/fileupload',upload.array('document'),userController.uploadfile);
router.post('/download',userController.getf);
router.get('/getfile',userController.getfile);


module.exports=router;

