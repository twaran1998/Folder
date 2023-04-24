const User = require("../models/user");
const appointment = require("../models/appointment");



module.exports = async (req,res)=>{

    let appointments = await appointment.find({isTimeSlotAvailable:true,testType:"G2"});

    
    // let formData = {};
    let formData = {
        "firstName": "",
        "lastName": "",
        "dob": "",
        "age": "",
        "licNumber": "",
        "make": "",
        "model":"",
        "year": "",
        "plateNumber": "",
        "appDate":"",
        "appTime":"",
        "g2_test_result":"",
        "g2_test_comments":""
    };

    

    //getting user details from the db
    User.findById(req.session.user.userId,  async (error,user)=>{
        if(error || !user){
            // console.log(error);
            // console.log(user);
            console.log("could not find user");
            return res.redirect("/");
        }
        else if(user.license_no != "default"){   //saving the details in formData if user has already registered for G2
            formData = {
                "firstName": user.first_name,
                "lastName": user.last_name,
                "dob": user.date_of_birth,
                "age": user.age,
                "licNumber": user.license_no,
                "make": user.car_details.make,
                "model":user.car_details.model,
                "year": user.car_details.year,
                "plateNumber": user.car_details.plate_no,
                "g2_test_result": user.g2_test_result,
                "g2_test_comments":user.g2_test_comments
            };

            let appData = await appointment.findById(user.appointment_id);
            if(appData && appData.testType =="G2"){
                formData.appDate = appData.app_date;
                formData.appTime = appData.time_slot;
            }
            
            
        }



        res.render("G2",{formData,appointments});

    })
    
    
}