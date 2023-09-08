
var btnn=document.getElementById("btn");
btnn.addEventListener("click",function(){
    var inn=document.getElementById("num").value;
    vol=[(4/3)*3.14]*[(inn)**3];
    console.log(vol);
})