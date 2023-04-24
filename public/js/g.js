
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

const gSlotBookingFormSubmitted = () =>{
    
}

$(document).ready( () => {

    $('#date_of_appointment').change(dateChanged);

    $("#gSlotBookingForm").submit(gSlotBookingFormSubmitted);

    $('#g2_form').submit(function(e) {
        $(':disabled').each(function(e) {
            $(this).removeAttr('disabled');
        })
    });
})