// //JS- IF -ELSE STATEMENTS

//  console.clear();
//  if(4>7){
//     console.log(true);
//  }
//  else if(4>3){
//     console.log(false);
//  }
//  else{
//     console.log("Nothing")
//  }

//  //JS-SWITCH CASE
// var currentDay=0;
// switch(currentDay){
//     case 1:
//     console.log('Sunday')
//     break
//     case 2:
//     console.log("Tuesday")
//     break
//     case 3:
//     console.log("Wednesday")
//     break
//     case 4:
//         console.log("Thursday")
//         break
//     case 5:
//         console.log("Friday")
//         break
//     case 6:
//         console.log("Saturday")
//         break
//     case 7:
//         console.log("Sunday")
//         break
//     default :
//      console.log("enter correct number");

// }
 

//Javascript Program to check if a number is Odd or even

var num=7;
if(num%2==0){
    console.log("the Number is evem");
}
else{
    console.log("The Number is odd");
}

//Apply javascript string methods for the following strings
//Applines and Applies is awesome

var string ="Applines"
var string1="Applines is awesome";
console.log(string.toLowerCase());
console.log(string.toUpperCase());
console.log(string.charAt(6));
console.log(string.slice(2,6));
console.log(string.length);
console.log(string1.split(" "));
console.log(string.concat(' ',string1));
console.log(string1.substring(4,9));
var combo=string+' '+ string1;
console.log(combo);
console.log(combo.indexOf('is'));
console.log(combo.lastIndexOf('Applines'));

//javascript program to check if a number is positive negative ot zero;

var num1=-2;
if(num1>0){
    console.log("Positive Number");
}
else if(num1<0){
    console.log("Negative number");
}
else{
    console.log("Number is Zero");
}

//javascript program to find the sum of natural numbers

var number=7;
var k=[number*(number+1)]/2
console.log(k);

console.log(this.Date());

//javascript program to find the largest among three numbers
var num1=10
var num2=8
var num3=7
if(num1>num2){
    if(num1>num3){
        console.log("Num1 is larger");
    }
    else{
        console.log("Num3 is larger");
    }
}
else if(num2>num3){
    console.log("Num2 is larger");
}
else{
    console.log("num3 is larger");
}
//ARITHMETIC OPERATIONS
var  num1=3;
var num2=5
var num3=8;
console.log(num1+num2+num3);//16
console.log(num3-num2-num1);//0
console.log(num1*num2*num3);//120
console.log(num3/num1);//2.6666
console.log(num3%num1);//2
console.log(num1++);//3
console.log(++num2)//6
console.log(num3--);//8
console.log(--num2);//5

// //ASSIGNMENT OPERATORS'
// var  num1=10;

// var num2=num1;
// console.log(num2);//10
// console.log(num2 += 40);//50
// console.log(num2-=30);//20
// console.log(num2*=num1)//200
// console.log(num1,num2);//10,200
// console.log(num2%=10);//0
// console.log(num1/=10);//1
// console.log(num1%=num2);//0

// //COERCION - IMPLICIT BY JS AND EXPLICIT BY US
 
// console.clear();
// var mStr="hello"
// var num=4;
// var nSum=mStr+num;
// console.log(nSum);
// console.log(typeof(nSum));
// var numm=+'2'
// console.log(+'2');
// console.log(typeof(numm));
// //COERCTION - EXPLICIT BY US

// //to string
// var myNum=10
// console.log(typeof(String(myNum)));
// console.log(typeof(String(null)));
// console.log(typeof(String(true)))
// console.log(typeof(String(undefined)));
// console.log(typeof(String(-98.76)));
// //To Number
// console.log(typeof(Number(54.64)));
// console.log(typeof(Number(true)));
// console.log(typeof(Number('apple')));
// //TO boolean
// console.log(Boolean(1),typeof(Boolean(1)));
// console.log(typeof(Boolean(0)));
// console.log(typeof(Boolean(null)));
// console.log(typeof(Boolean('Apple')));
// console.log(typeof(Boolean(undefined)));
 

// //JS-OBJECTS

// // var myProfile={
// //     "name":"KanyaKumari",
// //     "ID":'n181103',
// //     "college":"IIITN"
// // }
// // console.log(myProfile)
// // console.log(typeof(myProfile));
// var myCar={
//     name:"Benz",
//     location:"vizag",
//     manufacturer:{
//         name:"kanya",
//         date:"today"
//     },
//     topSpeed:429,
//     color:"black",
//     applyBrakes:function(){
//         setTimeout(function(){
//             console.log('car stopped');
//         },5000)
//     }
// }
// console.log(myCar.name);
// console.log(myCar.manufacturer.date);
// console.log(myCar.applyBrakes());
// console.log(myCar.applyBrakes);

// //JS-ARRAYS
// var myFriends=['kanya','kanna','baby','bro'];
// console.log(myFriends);
// console.log(myFriends[3]);
// console.log(typeof(myFriends));
// myFriends[3]='bujji';
// console.log(myFriends);
// myFriends[4]='bangaram';
// console.log(myFriends)
// console.log(myFriends.length)
// myFriends[10]="hero";
// console.log(myFriends);
// myFriends[myFriends.length]="chocky";
// console.log(myFriends);

// myFriends.push('kumari');
// console.log(myFriends);
// var popp=myFriends.pop();
// console.log(myFriends);
// console.log(popp);

// //JS-ARRAYS-PART2
// var myFriends=['kanya','kanna','baby','bro'];
// myFriends.splice(2,0,"hero","angel")
// //1st tells where to start
// //2nd tells how many items to delete
// //3rd and 4th and so on tells what items to be added
// console.log(myFriends);
// var myCol=['lakshmi','meghana','karthik','vasu','sameer'];
// console.log(myFriends.concat(myCol));
// console.log((myFriends.concat(myCol)).sort());

// //JS-LOOPS
// var mList=[1,2,3,4,5,6]
// var pos;//even posiiton
// for(pos=0;pos< mList.length;pos++){
//     if(pos%2 !==0) continue
//     console.log('position =>' + pos + ' value =>'+ mList[pos]);
// }

// var mList=[1,2,3,4,5,6]
// var pos;//break statement
// for(pos=0;pos< mList.length;pos++){
//     if(pos>=3) break
//     console.log('position =>' + pos + ' value =>'+ mList[pos]);
// }
// var pos;//odd posiiton
// for(pos=0;pos< mList.length;pos++){
//     if(pos%2 ==0) continue
//     console.log('position =>' + pos + ' value =>'+ mList[pos]);
// }

//Write a function to perform arithmetic operations with 3 numbers in js
console.clear()
function mSum(num1=6,num2=5,num3=2 ){
    var add=num1+num2+num3;
    console.log(add);
    console.log(num3-num2-num1);
    console.log( num1*num2*num3);
    console.log(num3/num2);
    console.log(num3/num1);
    console.log(num1++);
    console.log(++num3);
    console.log(num2--);
    console.log(--num3);
}
var a=prompt("enter a first numbe");
var b=prompt("enter second number");
var c=prompt("enter third number");

mSum(a,b,c);

var total=10;
var sum=function(num1,num2){
    console.log(total);
    total=num1+num2;
    var total;
    console.log(total);
}
sum(90,80);