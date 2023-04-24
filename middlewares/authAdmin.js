const User = require("../models/user");

module.exports = (req,res,next)=>{
    console.log("authAdmin middleare")
    User.findById(req.session.user?.userId,(error,user)=>{
        if(error || !user){
            console.log(error);
            console.log(user);
            return res.redirect("/");
        }
        else if (user?.accountType!="admin"){
            console.log("comes here")
            return res.redirect("/");
        }
            
        next();
    })
};