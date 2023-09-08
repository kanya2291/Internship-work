var ele=document.getElementsByName("gender");
var bttn=document.getElementById("btn");

bttn.addEventListener("click",function(){
    for(i=0;i<ele.length;i++){
        if(ele[i].checked)
        {
        console.log(ele[i].value);
        }
    }
})
