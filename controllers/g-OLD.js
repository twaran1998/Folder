const g2Driver = require("../models/g2Driver");



const onGetRequest = (req,res)=>{
    
    res.render("G");
}

const onPostRequest = async (req,res) => {
    const g2d = await g2Driver.find({ "license_no" :req.body.licno });
    res.render("G", {g2d});
}

module.exports = {
    onGetRequest,
    onPostRequest
    
}