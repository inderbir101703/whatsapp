const mongoose=require('mongoose');
const message = require('../models/message');
const pusher = require('./pusher');
const connection_url= "mongodb+srv://inderbir:WILDstone123@cluster0.kz3aj.mongodb.net/whatsapp?retryWrites=true&w=majority";
mongoose.connect(connection_url,{
useCreateIndex:true,
useNewUrlParser:true,
useUnifiedTopology:true,

});
const db=mongoose.connection;
db.on('error',console.error.bind(console,"error"));
db.once('open',function(){
   console.log("db connected"); 

   const msgCollection=db.collection('messages');
   const changeStream=msgCollection.watch();
   changeStream.on("change",function(change){
       console.log('change is occured');
       if(change.operationType==='insert'){
               const messageDetails=change.fullDocument;
               pusher.trigger('messages','inserted',{
                       name:messageDetails.name,
                       message:messageDetails.message,
                       timestamp:messageDetails.timestamp,
                            received:messageDetails.received
               });

       }
       else
       console.log('error triggering pusher');
   })
});
module.exports=db; 