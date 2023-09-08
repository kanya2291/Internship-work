import React from "react";
function Employee1(props){
    return(
        <div class="card bg-success">
        <div class="card-body">
          <h5 class="card-title">Welcome to {props.name}</h5>
          <p class="card-text">Course : {props.course}</p>
          <p class="card-text">{'{'}"name":"{props.name}","course":"{props.course}"{'}'} </p>
        </div>
      </div> 
    )
}
export default Employee1;