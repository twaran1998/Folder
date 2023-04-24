
const updateSelectedOption = () => {
    $('#timeslot option:not([disabled]):first').attr("selected","selected")
}

const disableBookedTimeSlots = (bookedSlots) =>{

    for (option of $('#timeslot option')){
        if (bookedSlots.indexOf(option.value)!=-1){
            
            $(option).attr('disabled',true);  
        }   
    }

    updateSelectedOption();
}

const enableAllTimeSlots = () =>{

    for (option of $('#timeslot option')){
        
            
            $(option).attr('disabled',false);  
        
    }
    // updateSelectedOption();
}


const dateChanged = () =>{
    // console.log("date changed")
    // console.log(appointments.length)
    enableAllTimeSlots();
    let bookedSlots = [];
    for (appointment of appointments){
        if(appointment.app_date == $('#appointment_date').val() && appointment.testType == $("#testtype").val()){
            bookedSlots[bookedSlots.length] = appointment.time_slot;
        }
    }
    disableBookedTimeSlots(bookedSlots);
}

const testTypeChanged = () =>{

    enableAllTimeSlots();
    dateChanged();
}

$(document).ready( () => {
    

    $("#testtype").change(testTypeChanged);
    $('#appointment_date').change(dateChanged);
})