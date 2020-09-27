const User=require('../models/user');
const passport=require('passport');
const path =require('path');
const fs = require('fs');
const avatar_path=path.join('uploads/users/avatars');

module.exports.signup=function(req,res){
  console.log(req.body);
if(req.password!=req.confirm_password)
{console.log(req.body);
  return res.status(200).json({
      message:"Password do not match" 
  })  
}


   

console.log("ata avatar1");
User.uploadedavatar(req,res,function(err){






  User.findOne({email:req.body.email},function(err,user){
    if(err){return res.status(409).json({
        message:"error in signup"
    }
    )}
    if(!user)
    {console.log(req.body);
        User.create({ email:req.body.email, password:req.body.password, name:req.body.name},function(err,user){
    if(err)
    {return res.status(409).json({
        message:req.body
    })}

    
    
if(err){console.log("multer error:",err);
}
if(req.file){
  console.log("ata avatar3");
  if (user.avatar){
      fs.unlinkSync(path.join(__dirname, '..', user.avatar));
  }



user.avatar= 'uploads/users/avatars' + '/' + req.file.filename;  
user.save();
}
console.log(user.avatar);

return res.redirect('http://localhost:3000/');
})}
})
  })




}



module.exports.create_session=function(req,res){ 
  
    console.log("naneo");
    console.log(req.user);
  res.send(req.user);



    
}
module.exports.getuser=function(req,res){
    console.log("vich aa");
    console.log(req.user);
  res.send(req.user);
 
}
module.exports.showThem=function(req,res){
 
 
  User.find({},function(err,user){
if(err)
return res.status(500).json(err);
else
return res.status(200).json(user);

  })

}

module.exports.showThem2=function(req,res){
  console.log(req.body);
}