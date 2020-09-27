const Message=require('../models/message');
module.exports.home=function(req,res){

return res.redirect('http://localhost:3000/');
  return  res.status(200).json({
      data:"data is with us" ,
      message:"the mesaage" ,
      gobo:req.user
  })
}

module.exports.home2=function(req,res){
  if(req.isAuthenticated())
  {
   return  res.redirect('https://www.google.com/');
  }
 
  return res.send(req.user);}
module.exports.createMessage=function(req,res){
  

  Message.create(req.body,function(err,message){
    if(err){
      console.log('error at creating a message');
      return res.status(500).json(err);
    }
    else 
    return res.status(201).json(message);

  }
  
  )

}



module.exports.showThem=function(req,res){
 
 
  Message.find({},function(err,post){
if(err)
return res.status(500).json(err);
else
return res.status(200).json(post);

  })

}




