const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const g2DriverSchema = new Schema({
    first_name: String,
    last_name: String,
    license_no: {
        type: String,
        required: true,
        unique: true,
    },
    age: String,
    date_of_birth: String,
    car_details: {
        make: String,
    model: String,
    year: String,
    plate_no: String
    }
    
});

// g2DriverSchema.pre("save", function(next){
//     const driver = this;
//     bcrypt.hash(driver.license_no,10,(error,hash)=>{
//         driver.license_no = hash;
//         next();
//     })
// })

const g2Driver = mongoose.model("g2Driver", g2DriverSchema);

module.exports = g2Driver;
