
document.addEventListener("DOMContentLoaded", function(){
    // Handler when the DOM is fully loaded
    const params = new URLSearchParams(window.location.search)
    console.log("FROM COMMON.JS");
    
    if(params.has('toastMessage')){
        showToast(decodeURIComponent(params.get('toastMessage')),params.get('time'));
    }
  });


function showToast(message,time) {
    // Get the snackbar DIV
    console.log("showToast called ==========")
    var x = document.getElementById("snackbar");
    x.innerHTML = message;
    // Add the "show" class to DIV
    x.className = "show";
    
    // if time is not given, After 3 seconds, remove the show class from DIV
    time= time?time:3000;
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, time);
}