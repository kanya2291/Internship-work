var username=document.getElementById("username");
var loginform=document.getElementById("login-form");
var err=document.getElementById("username-err");

username.addEventListener("input",function(e){
    // console.log(e.target.value);
    var pattern=/^[\w]{6,8}$/;
    var currentValue=e.target.value;
    var valid=pattern.test(currentValue);

    if(valid){
        err.style.display="none"; 
    }
    else{
        err.style.display="block";
    }
})