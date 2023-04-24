const User = require("../models/user");

module.exports = (req,res,next)=>{
    
    User.findById(req.session.user?.userId,(error,user)=>{
        
        if(error || !user){
            console.log(error);
            console.log(user);
            return res.redirect("/");
        }
        else if (user?.accountType!="driver"){
            return res.redirect("/");
        }
            
        next();
    })
};