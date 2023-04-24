const user = require("../models/user");
const appointment = require("../models/appointment");

module.exports = async (req,res)=>{
    // console.log(req.body);
    let result;
    if(req.body.testResult == "pass"){
        result = true;
    }
    else if(req.body.testResult == "fail"){
        result = false;
    }

    if(req.body.test_type == "G2"){
        let doc = await user.updateOne(
            {
                license_no :req.body.license_number
            },
            { 
                g2_test_comments: req.body.comments.trim(),
                g2_test_result:result
            }
        )
        
    }
    else if(req.body.test_type == "G"){
        let doc = await user.updateOne(
            {
                license_no :req.body.license_number
            },
            { 
                g_test_comments: req.body.comments.trim(),
                g_test_result:result
            }
        )
    }
    let tempUser = await user.find({license_no :req.body.license_number});
    let doc = await appointment.findByIdAndDelete(tempUser[0].appointment_id);
    console.log(doc);
    res.redirect("/examiner");
}