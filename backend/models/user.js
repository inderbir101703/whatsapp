const mongoose=require('mongoose');
const multer =require('multer');
const path =require('path');
const avatar_path=path.join('uploads/users/avatars');
const crypto = require('crypto');
const userSchema= new mongoose.Schema({
       email:{
           type:String,
           required:true, unique: true
       },
       password:{
          type:String,
          required:true
       },
       name:{
         
           type:String, 
            required:true
         },
         avatar:{//making avatr for multer
            type:String 
         }
    
    }

);

let storage = multer.diskStorage({
    destination: function (req, file, cb) {//file from request and callback function
    
       
      cb(null, path.join(__dirname,'..',avatar_path));
    },
    filename: function (req, file, cb) {
     
      cb(null, file.fieldname + '-' + Date.now());
    
    }
  });

console.log("in users");
console.log(__dirname);
//static functions and name of fx is uploa davatar
userSchema.statics.uploadedavatar=multer({storage: storage}).single('avatar');
userSchema.statics.avatarpath=avatar_path;//so that we can access it publicaaly available
userSchema.statics.realavatar=avatar_path;

const User=mongoose.model('User',userSchema);
module.exports=User;