const g2Driver = require("../models/g2Driver");
module.exports = (req,res)=>{
    
    // g2Driver.create(req.body,(error,g2d) =>{
    //     console.log(error, g2d);
    // }
    // )

    g2Driver.create({
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
        }
    }
    ,(error,g2d) =>{
        console.log(error, g2d);
    }
    )

    res.redirect("/?toastMessage="+encodeURIComponent("Registration completed successful"));
}