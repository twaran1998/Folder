const user = require("../models/user");

module.exports = (req,res)=>{
    
    if(req.body.password1 == req.body.cpassword){
        user.create({
            username: req.body.username,
            password:  req.body.password1,
            accountType: req.body.usertype
        },(error,userDetails) =>{
           if(error){
               //reload signup page
               console.log("error signing up ",error);
               res.redirect("/login/?toastMessage="+encodeURIComponent("Signup Unuccessful. Please try again"));
           }
           else{
                // console.log("signup successful ");
               res.redirect("/login/?toastMessage="+encodeURIComponent("Signup Successful"));
           }
        })
    }
    // res.render("Login");
}