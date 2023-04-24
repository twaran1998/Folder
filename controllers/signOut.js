
module.exports =  (req,res)=>{
    if(loggedIn)  {
       global.loggedIn = null; 
       global.accountType = null;
       req.session.user.userId = null;
       req.session.user.accountType = null;
       
    }
    res.render("Login");

}