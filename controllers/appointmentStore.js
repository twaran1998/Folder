const appointment = require("../models/appointment");
module.exports = async (req,res)=>{

    let entry = await appointment.find({
        app_date: req.body.appointment_date,
        time_slot:  req.body.timeslot,
        testType:req.body.testtype
    });
    console.log("Entry",entry);
    
    if(entry.length!==0){
        res.redirect("/appointment/?toastMessage="+encodeURIComponent("Error. Appointment for this date and time already exists"));
    }
    else{
        appointment.create({
            app_date: req.body.appointment_date,
            time_slot:  req.body.timeslot,
            userid: req.session.user.userId,
            testType:req.body.testtype
        }
        ,(error,g2d) =>{
            console.log(error, g2d);
            if(!error){
                res.redirect("/appointment/?toastMessage="+encodeURIComponent("Time slot and date saved"));
            }
        });
    }

    

    
}