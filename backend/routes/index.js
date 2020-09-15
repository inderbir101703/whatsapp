const express=require('express');
const app=express();
const router=express.Router();
const home_controller=require('../controllers/home_controller');
router.get('/',home_controller.home);
router.post('/messages/new',home_controller.createMessage);
router.get('/messages/sync',home_controller.showThem);
module.exports=router;