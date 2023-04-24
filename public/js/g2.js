const disableInputFields =  () =>{
    $("#g2_form input").prop("disabled", true);
}

const updateTimeSlots = (availableSlots) =>{
    $("#timeslot").empty();

    if(availableSlots.length === 0){
        $('#timeslot').append(new Option("Slots Unavaiable", ""));
    }
    else{
        for (slot of availableSlots){
            $('#timeslot').append(new Option(slot,slot));
        }
        
    }
}

const dateChanged = () =>{
    // console.log("date changed")
    // console.log(appointments.length)
    let availableSlots = [];
    for (appointment of appointments){
        if(appointment.app_date == $('#date_of_appointment').val()){
            availableSlots[availableSlots.length] = appointment.time_slot;
        }
    }
    updateTimeSlots(availableSlots);
}



$(document).ready( () => {

    if(formData?.firstName){           // if user has already saved the data, disable inputs
        disableInputFields();
    }

    if(formData && !formData.appDate && formData.g2_test_result == false && formData.licNumber){
        //if the person has failed the test before
        //dont show appointment date and time details
        $("#app_details").attr("style", "display:none");
    }


    $('#date_of_appointment').change(dateChanged);


})