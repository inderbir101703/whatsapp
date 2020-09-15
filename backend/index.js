
const express=require('express');
const app=express();
const router=express.Router();
const port=9000;
const db=require('./config/moongoose');
const cors=require('cors');


//middleware
app.use(express.urlencoded());
app.use(express.json());
app.use(cors());
app.use(function(req,res,next){
  res.setHeader("Access-control-Allow-Orgin","*");
  res.setHeader("Access-control-Allow-Headers","*");
next();
});
app.use('/', require('./routes'));



app.listen(port,function(err){
    if(err) 
{
  console.log(`there was a error in listening at : ${err}`);
  return;  
}
    console.log(`we are connected to server at ${port}`);
})