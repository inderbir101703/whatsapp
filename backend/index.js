
const express=require('express');
const app=express();
const router=express.Router();
const PORT=process.env.PORT||9000;

const db=require('./config/moongoose');
const cors=require('cors');
const cookieParser=require('cookie-parser');
const passport=require('passport');
const passportLocal=require('./config/passport-local').Strategy;
const session=require('express-session');
const bodyParser = require('body-parser');
const User=require('./models/user');
const mongoStore=require('connect-mongo')(session);
const proxy=require('http-proxy-middleware');
const control=require('./controllers/home_controller');
//middleware
app.use('/uploads',express.static(__dirname + '/uploads'));




//session

app.use(express.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.urlencoded());
app.use(
  cors({
  orgin:"http://localhost:3000",
  credentials:true,
}));
app.use(function(req, res, next) {
  console.log("bhai kuch kari na");
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept,Authorization"
  );
  res.header('Access-Control-Allow-Credentials', true);
  console.log("ja tu ja");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE,OPTIONS');
  next();
});









app.use(session({
  name:"holla",
secret:"encode",
saveUninitialized:false,
resave:false,
cookie:{maxAge:(1000*60*100)},
store:new mongoStore({
  mongooseConnection:db,
  autoRemove:'disabled'
},function(err){console.log(err);})
}));
app.use(cookieParser("encode"));
app.use(passport.initialize());
app.use(passport.session());



//routes
app.use('/', require('./routes'));



app.listen(PORT,function(err){
    if(err) 
{
  console.log(`there was a error in listening at : ${err}`);
  return;  
}
    console.log(`we are connected to server at ${PORT}`);
})