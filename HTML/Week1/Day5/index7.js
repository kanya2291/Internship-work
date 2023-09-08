var frt= document.getElementById("fruit");
console.log(frt,"Fruittt")
var sub=document.getElementById("btn");
sub.addEventListener("click",function(){

      //   console.log(frt.selectedIndex.text.value)
        frt.remove(frt.selectedIndex);
  })
