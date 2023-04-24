const user = require("../models/user");

module.exports = async (req,res)=>{
    
    console.log("updating the info...")
    let doc = await user.findOneAndUpdate(
        {
            license_no :req.body.license_no
        },
        {
            car_details: {
                make: req.body.make,
                model: req.body.model,
                year: req.body.year,
                plate_no: req.body.plate_no
            }
        }
      );
      res.redirect("/?toastMessage="+encodeURIComponent("Information updated successful"));
}