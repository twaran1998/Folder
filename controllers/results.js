const appointment = require("../models/appointment");
const User = require("../models/user");


module.exports =  async (req,res) => {
    let testName = req.query.testType?req.query.testType:"";
    let result = req.query.result?req.query.result:"";

    if(!testName && !result){
        res.render("Results");
    }

    else{
        let users = "";
        // console.log("===++++++++",result==='true');
        if(testName=="g2test"){
            users = await User.find({accountType:"driver",test_type:"G2",g2_test_result:(result==='true') });
        }
        else if(testName=="gtest") {
            users = await User.find({accountType:"driver",test_type:"G",g_test_result:(result==='true')});
        }

        // console.log(users);
        res.render("Results",{users});
    }


    
}