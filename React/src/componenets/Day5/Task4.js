import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
function Task4() {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount)
    const increment=()=>{
        setCount(prevCount=>prevCount +1)
    }
    const decrement=()=>{
        if(count>1){
            setCount(prevCount => prevCount - 1)
        }
       
    }
    return (
        <div className="card text-dark ">
             <div  className="card-header bg-primary text-white h4">Counter</div>
             <div className="card-body">
                <h5 className="card-title">{count}</h5>
                <p className="card-text">
                <Button  variant="success"  onClick={increment}>Increment</Button>
                <Button className="mx-3" variant="warning" onClick={decrement}>Decrement</Button>
                </p>
            </div>
        </div>
    )
}
export default Task4