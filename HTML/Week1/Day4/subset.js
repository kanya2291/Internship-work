var data="Gopal";
var sub=[];
for(var i=0;i<data.length;i++){
    for (var j=i+1;j<data.length+1;j++){
        sub.push(data.slice(i,j));
    }
}
console.log(sub);