const user = require("../models/user");
const appointment = require("../models/appointment");



module.exports = async (req,res)=>{
    let g2d ="";

    let appointments = await appointment.find({isTimeSlotAvailable:true,testType:"G"});
    if(loggedIn){
        g2d = await user.findById(req.session.user.userId);
        if(g2d.license_no == "default"){
            res.render("G");
        }
        else{
            let appData = await appointment.findById(g2d.appointment_id);
    
            if(appData && appData.testType =="G"){
                g2d.appDate = appData.app_date;
                g2d.appTime = appData.time_slot;
            }
            res.render("G", {g2d,appointments});
        }
        console.log(g2d);
    }

}