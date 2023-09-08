var actionBtn=document.getElementById("btn");

var inn=document.getElementById("fname");

inn.onmouseout=function(){
    inn.style.backgroundColor="aqua";
}


actionBtn.addEventListener('click',function(){
    var inContent=document.getElementById("fname").value;
    console.log(inContent);
    var infContent=document.getElementById("lname").value;
    console.log(infContent);
})