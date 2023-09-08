import React from "react";
import './Style.css';
import { useNavigate } from "react-router-dom";

function MyButtton(){
    const navigate=useNavigate()
    let s1={
        background:'green'
    }
    return (
        <>
            <h1 className="heading" style={{color:"red"}}>Functional Component example</h1>
            <h1 className="heading" style={s1}>Hii ....!Good Morning</h1>
            <p className="para">Have a Good Day</p>
            <div id="divv"></div>

            {/* <input type="checkbox" id="sub" />
            <label htmlFor="sub" > Subscribe:</label> */}
        </>
        
    )
}
// let btnn=document.getElementById("btnn");
// let divv=document.getElementById("divv");
// btnn.addEventListener("click",function(){
//     divv.innerHTML="Keep Goinggg and Be smart..."

// })  
export default MyButtton;