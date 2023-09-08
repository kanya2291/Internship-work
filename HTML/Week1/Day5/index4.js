var tab=document.getElementById("tablee");
// console.log(tab);


var btnn=document.getElementById("btn");
btnn.addEventListener("click",function(){
    var row=tab.insertRow();
    var col=row.insertCell();
    var col1=row.insertCell();
    var col2=row.insertCell();

    col.innerHTML=prompt("enter serial number");
    col1.innerHTML=prompt("enter Name");
    col2.innerHTML=prompt("enter age the named persons")
    // alert("i am here");
})