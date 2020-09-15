const express=require('express');
const app=express();
const moongoose=require('mongoose');
const messageschema= new moongoose.Schema(
        { 
    
     message:{
         type:String,
         required:true
     } , 
     name:{
         type:String,
         required:true
     }
,
    
        timestamp: {
      type:String 
    },
    received:Boolean 
}
);
const  message=moongoose.model('message',messageschema);
module.exports=message;