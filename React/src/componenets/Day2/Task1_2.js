import React from "react";
 class MyButton extends React.Component{
    render(){
        let s1={
            textAlign:"center",
        }
        let name= (<div>
                     <header>
                        <h1 style={s1}>Class Component</h1>
                        <ul>
                         <li>Home</li>
                         <li>About Us</li>
                         <li>Contact</li>
                         </ul>
                    </header>
                </div>)
        return ( name )
    }
 }
 export default MyButton;