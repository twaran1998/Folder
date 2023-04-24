const User = require("../models/user");
const appointment = require("../models/appointment");

const generateProperAppointmentArray = (appointments,users) => {
    let newAppArray = []
    for(let appointment of appointments){
        let tempAppJSON = {
            testType: appointment.testType
        }
        for(let user of users){
            if(user.appointment_id == appointment._id){
                tempAppJSON.first_name = user.first_name;
                tempAppJSON.last_name = user.last_name;
                tempAppJSON.license_no = user. license_no;
                tempAppJSON.plate_no = user.car_details.plate_no;
                tempAppJSON.testType = user.test_type
                newAppArray[newAppArray.length] = tempAppJSON;
            }
        }
        // console.log("=====",tempAppJSON);
        
    }
    return newAppArray;
}


module.exports =  async (req,res) => {
    let apps= "";
    if(req.query.testType =="g2test"){
        
        apps = await appointment.find({isTimeSlotAvailable:false,testType:"G2"});
    }
    else if(req.query.testType =="gtest"){
        

        apps = await appointment.find({isTimeSlotAvailable:false,testType:"G"});
    }
    else{
        
        apps = await appointment.find({isTimeSlotAvailable:false});
    }
    let users = await User.find({accountType:"driver"});

    let appointments = generateProperAppointmentArray(apps,users);
    // console.log(appointments);
    // console.log(users);
    res.render("Examiner",{appointments});
}