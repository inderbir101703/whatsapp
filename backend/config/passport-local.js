const passport=require('passport');
const LocalStrategy=require('passport-local').Strategy;
const User = require('../models/user');



     passport.use(new LocalStrategy({
        usernameField: 'email',
        passReqToCallback:true // for flash messages
    },
    function(req,email, password, done){
        // find a user and establish the identity
        User.findOne({email: email}, function(err, user)  {
            
            if (err){
                console.log("behn ki churt1");
                return done(err);
            }

            if (!user || user.password != password){
                console.log("behn ki churt2");
                return done(null, false);
            }
               
            return done(null, user); // this return user to serailizer and serializser stores the the user.id in the session cookie which encypted by express session middleware age wala
        });
    }


));


   passport.serializeUser(function(user,done){
  
 
done(null,user.id);
   }) ;
   
   
   passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
        if(err){
            console.log('Error in finding user --> Passport');
            return done(err);
        }

        return done(null, user);
    });
});


//check if user is signed in
passport.checkAuthentication=function(req,res,next)
{//if yes pass it ono the next to next function
    console.log('iwas here i n lalaand');
    if(req.isAuthenticated()){
        return next();
    }
    //if user is not signed in
    return res.redirect('https://www.w3schools.com/js/js_cookies.asp');
}

passport.setAuthenticatedUser=function(req,res,next){
if(req.isAuthenticated()){
   //req.user contains the current sign in user from session cookie and we are just sending it to locals for the views 

 console.log('iwas here in uuser');
 
}
 next();
}





module.exports = passport;