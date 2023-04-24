const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
    app_date: {
        type:String,
        required:true
    },
    time_slot: {
        type:String,
        required:true
    },
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
      },
    isTimeSlotAvailable: {
        type:Boolean,
        default:true
    },
    testType:{
        type:String
    }
    
});



const appointment = mongoose.model("appointment", appointmentSchema);

module.exports = appointment;
