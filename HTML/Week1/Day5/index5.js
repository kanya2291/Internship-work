
function changeContent(){
    // console.log("@@@@@@@")
     var tab=document.getElementById("tablee");
     ro=int(prompt("enter a row number you want to update(0,1,2)"));
     co=int(prompt("enter a col number you want to update(0,1,2)"));
     con=prompt("enter the content to update");
    var col=tab.rows[parseInt(ro,10)].cells;//[parseInt(ro,10)] => function with the radix(base) of 10.this step ensures that 'ro' is treated as a decimal number.
    tab.col.innerHTML=con;
    // col[parseInt(co,10)].innerHTML=con;
}