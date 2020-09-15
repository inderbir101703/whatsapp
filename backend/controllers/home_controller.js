const Message=require('../models/message');
module.exports.home=function(req,res){
  console.log(req.query.id);
  return  res.status(200).json({
      data:"data is with us" ,
      message:"the mesaage"
  })
}

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
  console.log('i am hfghfgin here');
 
  Message.find({},function(err,post){
if(err)
return res.status(500).json(err);
else
return res.status(200).json(post);

  })

}