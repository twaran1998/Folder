const express = require("express");
const app = new express();
const path = require("path");
const ejs = require("ejs");
require("dotenv").config();

const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const expressSession = require("express-session");

const g2Driver = require("./models/g2Driver.js");
const user = require("./models/user.js");

const dashboardController = require("./controllers/dashboard");
const g2Controller = require("./controllers/g2");
const g2StoreController = require("./controllers/g2Store");
const gController = require("./controllers/g");
const gUpdateController = require("./controllers/gUpdate");
const signUpController = require("./controllers/signUp");
const loginController = require("./controllers/login");
const signOutController = require("./controllers/signOut");
const appointmentController = require("./controllers/appointment");
const appointmentStoreController = require("./controllers/appointmentStore");
const appointmentStore = require("./controllers/appointmentStore.js");
const examinerController = require("./controllers/examiner");
const gSlotBookController = require("./controllers/gSlotBook");
const examinerResultUpdateController = require("./controllers/resultUpdate");
const g2SlotBookController = require("./controllers/g2SlotBooking");
const resultsController = require("./controllers/results");

const authDriver = require("./middlewares/authDriver");
const authAdmin = require("./middlewares/authAdmin");
const authExaminer = require("./middlewares/authExaminer");





app.set("view engine","ejs");

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
    expressSession({
      secret: "Arbitrary String",
      resave:false,
      saveUninitialized:true
    })
  );

mongoose.connect(process.env.MONGOCONNECTION, { useNewUrlParser: true });

let port = process.env.PORT;
if(port == null || port == "")  {
  port = 3000;
}

app.listen(port,()=>{
    console.log("App listening on port "+port);
})

global.loggedIn = null;
global.accountType = null;
app.use("*", (req,res,next)=>{
  if(req.session.user){
    loggedIn = req.session.user.userId;
    accountType = req.session.user.accountType;
  }
  
  // console.log("loggedIn====",loggedIn);
  next();
});




//opens dashboard page
app.get("/",dashboardController);

//opens g page
app.get("/g",authDriver,gController);

// //finds the user whose license number was entered
// app.post("/g",authMiddleware, gController.onPostRequest);

//opens g2 page
app.get("/g2",authDriver, g2Controller);

//saves g2 form detals in db
app.post("/g2/store",authDriver,g2StoreController);

//books g2 slot
app.post("/g2/bookSlot",authDriver,g2SlotBookController);

//updates g form details 
app.post("/g/update",authDriver,gUpdateController);

//Books G Slot 
app.post("/g/bookSlot",authDriver,gSlotBookController);

//displays login page
app.get("/login",loginController.displayPage);

//logs the user in
app.post("/login",loginController.login);

//saves sign up details in db 
app.post("/signup",signUpController);

app.get("/signOut",signOutController);

app.get("/appointment",authAdmin,appointmentController);

app.get("/results",authAdmin,resultsController);

app.post("/appointment/store",authAdmin,appointmentStoreController);

//opens examiner page
app.get("/examiner",authExaminer,examinerController);

//updates results for the driver
app.post("/examiner/updateResults",authExaminer,examinerResultUpdateController);



// app.post("/g", async (req,res)=>{           // post for g //encrypted license number
    
//     // const g2d = await g2Driver.find({ "license_no" :req.body.licno });
    

//     // bcrypt.compare( req.body.licno, driver.license_no, (error,same) => {
//     //     if (same){
//     //         console.log("Found driver details");
//     //     }
//     //     else {
//     //         console.log("Could not find driver details");
//     //     }
        
//     // })

//     let encryptedLicenseNumber = "";
//     bcrypt.hash(req.body.licno,10,(error,hash)=>{
//         encryptedLicenseNumber = hash;
//         console.log("encryptedLicenseNumber",encryptedLicenseNumber);
//         g2Driver.findOne({ "license_no" :encryptedLicenseNumber},(error,driver)=>{
//             console.log("driver:",driver);
//             const g2d = [driver];
//             res.render("g", {g2d});
//         })
//     });

// })



// app.get("/dashboard",(req,res)=>{
//     res.end("Welcome to Dashboard")
// }


