const user = require("../models/user");
const appointment = require("../models/appointment");

module.exports = async (req,res)=>{

    let appointmentBooked = await appointment.findOne({app_date:req.body.date_of_appointment,time_slot:req.body.timeslot,testType:"G2"});



    user.findByIdAndUpdate(req.session.user.userId,{
        first_name: req.body.first_name,
        last_name:  req.body.last_name,
        license_no: req.body.license_no,
        age: req.body.age,
        date_of_birth: req.body.date_of_birth,
        car_details: {
            make: req.body.make,
            model: req.body.model,
            year: req.body.year,
            plate_no: req.body.plate_no
        },
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