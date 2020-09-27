const express=require('express');
const passport=require('passport');
const passportLocal=require('../config/passport-local');
const app=express();
const router=express.Router();
const home_controller=require('../controllers/home_controller');
const user_controller=require('../controllers/user_controller');
router.get('/',home_controller.home2);
router.get('/getuser',user_controller.getuser);
router.post('/messages/new',home_controller.createMessage);
router.get('/messages/sync',home_controller.showThem);
router.get('/getuser',user_controller.getuser);
router.post('/signup',user_controller.signup);
router.get('/getallusers',user_controller.showThem);
router.post('/signin',passport.authenticate('local',{
    failureRedirect:'http://localhost:3000'
    
}),home_controller.home);
router.post('/login',passport.authenticate('local',{
    failureRedirect:'http://localhost:3000'
    
}),user_controller.create_session);

module.exports=router;