
var r=prompt("enter no of rows to create");
var c=prompt("enter no of cols to create");

function createTable(r,c){
     tab=document.getElementById("divv");
    const table=document.createElement("table");
    var rows,cols;
    for( let i=0;i< r;i++){
        rows=document.createElement("tr");
        rows.setAttribute("id","tr");
        for( let j=0;j<c ; j++){
            cols=document.createElement("td");//no need of any concatenation 
            cols.setAttribute("id","td");
            const cellText=document.createTextNode(`(${i},${j})`);//takes js exp and used to convert the expression into string adn inserted into the expression
            cols.appendChild(cellText);
            rows.appendChild(cols);
        }
        table.appendChild(rows);
    }
    tab.appendChild(table); 
    table.setAttribute("id","tablee");
    var boo=document.getElementsByTagName("table","tr","td");
    // console.log("hii");
    // boo.style.border="1px solid black";
    // boo.setAttribute("style", "width: 500px; height: 300px; background-color:red;");
    // document.write(table);

}
createTable(r,c);

// tab.innerHTML=table;
