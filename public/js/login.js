
function showSignup(){
    document.getElementById("signUp").style.display = "flex";
    document.getElementById("login").style.display = "none";
    document.getElementById("btns2").style.backgroundColor = "white";
    document.getElementById("btns2").style.color = "black";
    document.getElementById("btns1").style.backgroundColor = "rgb(28, 47, 47)";
    document.getElementById("btns1").style.color = "white";
    // $("input[type='password']").css("border-bottom","2px solid #67a6a6");   
    console.log("SHow signup")
}
function showLogin(){
    document.getElementById("signUp").style.display = "none";
    document.getElementById("login").style.display = "flex";
    document.getElementById("btns1").style.backgroundColor = "white";
    document.getElementById("btns1").style.color = "black";
    document.getElementById("btns2").style.backgroundColor = "rgb(28, 47, 47)";
    document.getElementById("btns2").style.color = "white";
    // $("input[type='password']").css("border-bottom","2px solid #67a6a6");   
    console.log("SHow login")
}

function checkBothPasswords(){
    if($("#password1").val()!= $("#cpassword").val()){
        
        $("#cpassword").css("border-bottom","2px solid red");
        // $("input[type='password']").css("border-bottom","2px solid red");   
    }
}



$( document ).ready(function() {
    const params = new URLSearchParams(window.location.search)
    if(params.has('toastMessage') &&(decodeURIComponent( params.get('toastMessage')) =="Signup Unuccessful. Please try again")){
        // console.log("signup unsuccessful")
        showSignup();
    }
    else if(params.has('toastMessage') &&(decodeURIComponent( params.get('toastMessage')) =="Login Unsuccessful. Could not find the user. Please SignUp first")){
        // console.log("Login Unsuccessful. User does not exist")
        showSignup();
    }

    $("#cpassword").change(checkBothPasswords);

    $("#signupForm").submit(() =>{
        // console.log("submit called");
        // console.log($("#password1").val());
        // console.log($("#cpassword").val());
        if($("#password1").val()!= $("#cpassword").val()){
            event.preventDefault();
            
            $("#cpassword").css("border-bottom","2px solid red");
            $("#password1").css("border-bottom","2px solid red");
            $("input[type='password']").css("border-bottom","2px solid red");   
            showToast("The passwords did not match",6000);
        }
        
    })
});
    
