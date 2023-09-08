// var num1=4;
// var num2=5;
// var num3=6;
// console.log(num1+num2+num3); 

//basics
// console.clear();
// var firstname=10;
// console.log(firstname);
// var secondname=30;
// console.log(secondname);
// console.log(typeof(secondname))



//camel case
// var firstName  recommended for js 

// //pascal case
// var FirstName

// //Snake case
// var first_name

//rules for naming Js variables
//--name can contain letterns,digits,_ and $
//--name cannot start with a digit
//---names are case sensitive
//---names can start with underscore and $
//names can not be reserved keywords

//number to string
var num1=20;
//toString
console.log(num1.toString());
console.log(typeof(num1));

var strNum1="10";
var strNum2="11.3";
var strNum3="ABC"
//parseInt() string numeral as input and returns a number
console.log(parseInt(strNum1));
console.log(parseInt(strNum2));
console.log(parseInt(strNum3));

console.log(parseFloat(strNum1));
console.log(parseFloat(strNum2))
console.log(parseFloat(strNum3));

//toFixed() takes floating number and rounds i9t off to given posiiton

 var strFloat=54.94923;
 console.log(strFloat.toFixed())
 console.log(strFloat.toFixed(3))
 console.log(strFloat.toFixed(5));
  

 //JS-STRINGS
console.clear()
 var myFirstString='I love Zoo';
 console.log(myFirstString);
 console.log(typeof(myFirstString));
 var mySecondString="I \"Love\" you";
 console.log(mySecondString);
 var myThirdString="i 'love' you";
 console.log(myThirdString)
 var myFourthString='i "love" you';
 console.log(myFourthString);

 //JS-STRING FUNCTIONS

 var firstString="hii hello welcome hii";
 console.log(firstString.length);
 console.log(firstString.indexOf("hello"));
 console.log(firstString.lastIndexOf("hii"));
 //Get a part of string slice(start,end)
 console.log(firstString.slice(4,8));
 console.log(firstString.slice(-10));
 console.log(firstString.slice(5));
 console.log(firstString.substring(4,8))
//JS STRIGN FUNCTIONS PART 2
 var string="this is javascript tutorial"
 var string1="another string"
 //toUpperCase()

 console.log(string.toUpperCase()); 
 console.log(string.toLowerCase());
console.log(string.concat(string1));
console.log(string.concat(' ',string1,' ',firstString));
 console.log(string +' ' +  string1);

 //trim() - to remove extra spaces

 var extraSpaces = "        myStrign       ";
 console.log(extraSpaces);
 console.log(extraSpaces.trim());
 //charAt()
 console.log(string.charAt(5));
console.log(firstString.split(" "))
var charr="'hii', 'hello', 'welcome', 'hii'";
console.log(charr.split(','));
var ch="this is awesome"
console.log(ch.split());

//NULL AND UNDEFINED 
var myVar //initialized but not assigned by any value
console.log(myVar);
 myVar = null; //assigned to null value
 console.log(myVar);

