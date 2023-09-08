// var person={
//     name:"kanya",
//     yearOfBirth:2003,
//     job:'Software'
// }
function Person(pName,pYearOfBirth,pJob){
    this.name=pName;
    this.yearOfBirth=pYearOfBirth;
    this.job=pJob;
    // this.calculateAge=function(){
    //     console.log(2023-this.yearOfBirth);
    // }
}
Person.prototype.calculateAge=function(){
    console.log(2023-this.yearOfBirth);
}
Person.prototype.updateYearOfBirth=function(BirthYear){
    this.yearOfBirth=BirthYear;
}

Person.prototype.lastname="kumarii";
var john=new Person('John',2003,'Pilot');
john.calculateAge();
john.updateYearOfBirth(1990);
john.calculateAge();
var clarie=new Person("kanya",2004,"working");
// console.log(clarie.name);
// console.log(john);
// console.log(clarie);