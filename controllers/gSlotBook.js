const user = require("../models/user");
const appointment = require("../models/appointment");

module.exports = async (req,res)=>{
    let appointmentBooked = await appointment.findOne({app_date:req.body.date_of_appointment,time_slot:req.body.timeslot,testType:"G"});

    user.findByIdAndUpdate(req.session.user.userId,{
        
        appointment_id: appointmentBooked._id,
        test_type:"G"
    }
    ,(error,g2d) =>{
        console.log(error, g2d);
        if(error){
            res.redirect("/?toastMessage="+encodeURIComponent("Sorry G Slot could not be booked.Please try Again"));
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

    res.redirect("/?toastMessage="+encodeURIComponent("G Test slot booked successful"));

}