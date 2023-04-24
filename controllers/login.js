const bcrypt = require("bcrypt");
const User = require("../models/user");

const displayPage = (req,res)=> {
    // res.end("Welcome to Login Page")
    // res.sendFile(path.resolve(__dirname,"pages/login.html"));
    
    res.render("Login");
}

const login =  (req, res) => {
  const { username, password } = req.body;

  //Find user
  User.findOne({ username: username }, (error, user) => {
    if (user) {
      //User found
      bcrypt.compare(password, user.password, (error, same) => {
        if (same) {
          //Passwords match
          //TODO:: implement session storage later
          console.log("Passwords match");
          req.session.user = {
            "userId":user._id,
            "accountType": user.accountType
          };
          res.redirect("/");
        } else {
          console.log("Passwords don't match");

          res.redirect("/login/?toastMessage="+encodeURIComponent("Login Unsuccessful. Incorrect Password"));
        }
      });
    } else {
      console.log("no user found");

      res.redirect("/login/?toastMessage="+encodeURIComponent("Login Unsuccessful. Could not find the user. Please SignUp first")+"&time=6000");
    }
  });
};


module.exports = {
    displayPage,
    login
}