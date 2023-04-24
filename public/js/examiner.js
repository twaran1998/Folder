

const isUserAlreadyClicked = (target)=>{
    //if form elements are present
        //return true;
    //else
        //return false;
    console.log("isUserClickedFunction");
    if(target.find(".driverInfoForm").css('display')=="block"){
        // console.log("returning true")
        return true;
    }
    else if(target.find(".driverInfoForm").css('display')=="none"){
        // console.log("returning false")
        return false;
    }

    
}

const userClicked = ()=>{
    // console.log("clicked",$(event.target));
    if(isUserAlreadyClicked($(event.target))){
        //remove form elements(test result and test comments)
        $(event.target).find(".driverInfoForm").attr("style", "display:none");
        $(event.target).find("#close").attr("style", "display:none");
    }
    else{
        //add form elements (test result and test comments)
        $(event.target).find(".driverInfoForm").attr("style", "display:block");
        $(event.target).find("#close").attr("style", "display:block");
    }
}

// const generateProperAppointmentArray = (appointments,users,testType="all") => {
//     let newAppArray = []
//     for(let appointment of appointments){
//         let tempAppJSON = {
//             testType: appointment.testType
//         }
//         for(let user of users){
//             if(user.appointment_id == appointment._id){
//                 tempAppJSON.first_name = user.first_name;
//                 tempAppJSON.last_name = user.last_name;
//                 tempAppJSON.license_no = user. license_no;
//                 tempAppJSON.plate_no = user.car_details.plate_no;
//                 newAppArray[newAppArray.length] = tempAppJSON;
//             }
//         }
        
//     }
//     return newAppArray;
// }

// const testTypeChanged = () =>{
//     if($("#testType").val()=="all"){

//     }
//     else if($("#testType").val()=="g2test"){

//     }
//     else if($("#testType").val()=="gtest"){

//     }
// }


$(document).ready( () => {
    // console.log(appointments);
    // $("#testType").change(testTypeChanged);
    const params = new URLSearchParams(window.location.search)
    
    $('#testType option[value='+params.get('testType')+']').attr('selected', 'selected');

   $(".testdriverinfo").click(userClicked);

   if(!apps.length){
       $("#examinerBody h3").text("No tests to display")
   }
   
})