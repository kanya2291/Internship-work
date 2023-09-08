// var btn1=document.getElementById('btn1');
// var btn2=document.getElementById("btn2");


// // console.log(btn2.style);
// // console.log(btn1.style.marginRight  );
// // console.log(btn2.style.marginLeft);
// // console.log(window.getComputedStyle(btn2).marginLeft);
// // console.log(btn2.style.textDecoration);

// btn1.onclick=function(){
//     document.getElementById("heading").style.fontSize="40px";
// }

// btn2.onclick=function(){
//     document.getElementById("heading").style.fontSize="10px";
// }



//form events

var act1=document.getElementById("uname");
var loginform=document.getElementById("login-form");
var btnn=document.getElementById("btn-submit");
act1.addEventListener('change',function(event){
    // var currentValue=event.target.value;
    // currentValue=currentValue.toUpperCase();
    // console.log(currentValue);
    console.log("element is changed");
})
act1.addEventListener('focus',function(){
    console.log("element is focused");
})
act1.addEventListener("blur",function(){
    console.log("element loses focus");
})
loginform.addEventListener("submit",function(e){
    alert("submit button is clicked");
    e.preventDefault();
})
btnn.addEventListener("mousedown",function(){
    console.log("mouse down event");
})
btnn.addEventListener("mouseup",function(){
    console.log("mouse up event");
})
btnn.addEventListener("dblclick",function(){
    console.log("double click event ");
})
act1.addEventListener("mouseover",function(){
    console.log("mouse over event");
})
act1.addEventListener("mouseout",function(){
    act1.style.backgroundColor="aqua"
})



document.body.addEventListener("keydown",function(e){
    var keyCode=e.keyCode;
    console.log(keyCode + " keydown was clicked")
    //to get the value of the pressed key we use keyCode properrty
    //for enter-13 and backspace-8,spcae-32 +-->107
})
document.body.addEventListener("keyup",function(e){
    var keyCode=e.keyCode;
    console.log(keyCode + " keyup was clicked")
    //to get the value of the pressed key we use keyCode properrty
    //for enter-13 and backspace-8,spcae-32 +-->107
})
document.body.addEventListener("keypress",function(e){
    var keyCode=e.keyCode;
    console.log(keyCode + " keypress was clicked")
    //to get the value of the pressed key we use keyCode properrty
    //for enter-13 and backspace-8,spcae-32 +-->107
})