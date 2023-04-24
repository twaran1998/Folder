const appointment = require("../models/appointment");



module.exports =  async (req,res) => {

    let appointments = await appointment.find({});
    // console.log("appointments",appointments)

    res.render("Appointment",{appointments});
}