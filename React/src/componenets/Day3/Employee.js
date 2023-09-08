import React from "react";
// import './styless.css'
class Example extends React.Component{
    render(){
        return(
            <div className="card text-dark ">
            <div className="card-header bg-success">{this.props.Head}</div>
            <div className="card-body">
                <h5 className="card-title">{this.props.title}</h5>
                <p className="card-text">My name is {this.props.name} and I am {this.props.age} old. </p>
            </div>
        </div>
        )
        }
    }

export default Example;