var mObj={
    "name": "kanya",
    "age" :18,
    "lastname" :"kumari",
    "married":"yes",
    "score":[1,2,3,4],
    "scrore" :null,
    "scoree":{
        "math" : 25,
        "science" :25
    }
}
// var strJson=JSON.stringify(mObj);
// console.log(strJson);
// console.log(JSON.parse(strJson));

function getTODOListFromBackend(){
    var http=new XMLHttpRequest();
    http.onreadystatechange=function(){
        if(this.readyState===4){
            if(this.status===200){
                var response=JSON.parse(this.responseText)  ;
                for(var i=0;i<response.length;i++){
                    console.log(response[i].title,response[i].id);
                }
            }
            else{
                console.log("call failed");
            }
           
        }
    }
    http.open('GET','https://jsonplaceholder.typicode.com/todos',true);
    http.send();
}
getTODOListFromBackend();