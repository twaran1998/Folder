const user = require("../models/user");
const appointment = require("../models/appointment");

module.exports = async (req,res)=>{

    let appointmentBooked = await appointment.findOne({app_date:req.body.date_of_appointment,time_slot:req.body.timeslot,testType:"G2"});



    user.findByIdAndUpdate(req.session.user.userId,{
        appointment_id: appointmentBooked._id,
        test_type:"G2"
    }
    ,(error,g2d) =>{
        console.log(error, g2d);
        if(error){
            res.redirect("/?toastMessage="+encodeURIComponent("Registration Unsuccessful. Try Again"));
        }

        else{
            
            appointment.findByIdAndUpdate(appointmentBooked._id,{
                isTimeSlotAvailable:false
            },(error,g2d) =>{
                console.log(error,g2d);
            });
        }
    }
    )

    res.redirect("/?toastMessage="+encodeURIComponent("Registration completed successful"));
}