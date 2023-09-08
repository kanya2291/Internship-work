//when a web page is loaded ,the browser creates a document object model of the page.It is the tree representaation of the HTML document.This DOM tree can be modified with the help of javascript

var coundownElement=document.getElementById("heading");
var initialCoutndownVal =coundownElement.innerHTML;
 
// var initialCoutndownVal = coundownElement.innerHTML;
// var bgImage=document.getElementById("image-back");
// console.log(bgImage.src);
// // coundownElement.innerHTML="hii";
// setInterval(function(){
//     initialCoutndownVal=initialCoutndownVal >0 ? initialCoutndownVal-1 :0;
//     coundownElement.innerHTML=initialCoutndownVal;
//     var backImgPath =initialCoutndownVal % 2 ===0 ? 'p1.jpeg' :" ";
//      bgImage.src=backImgPath;
// },1000);

coundownElement.style.backgroundColor="aqua";

 var interval=setInterval(function(){
    initialCoutndownVal =initialCoutndownVal > 0 ? initialCoutndownVal -1 :0;
    coundownElement.innerHTML=initialCoutndownVal;
    coundownElement.style.fontSize= initialCoutndownVal * 100 +"px";
    console.log(initialCoutndownVal*100 +"px");

    if(initialCoutndownVal <=0){
        clearInterval(interval);
    }
},1000);