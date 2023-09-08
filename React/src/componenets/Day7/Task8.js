import React, { useState } from 'react'
import './style7.css'
import { useSearchParams } from 'react-router-dom'
export const Task8 = () => {
    const initialCount = 0;
    const [count1, setCount1] = useState(initialCount)
    const [count2, setCount2] = useState(initialCount)
    const [count3, setCount3] = useState(initialCount)
    const [count4, setCount4] = useState(initialCount)
    const [count5, setCount5] = useState(initialCount)
    const increment1=()=>{
        setCount1(prevCount=>prevCount +1)
    }
    const decrement1=()=>{
        if(count1>0){
        setCount1(prevCount => prevCount - 1)
        }
    }
    const increment2=()=>{
        setCount2(prevCount=>prevCount +1)
    }
    const decrement2=()=>{
        if(count2>0){
        setCount2(prevCount => prevCount - 1)
        }
    }
    const increment3=()=>{
        setCount3(prevCount=>prevCount +1)
    }
    const decrement3=()=>{
        if(count3>0){
            setCount3(prevCount => prevCount - 1)
        }
    }
    const increment4=()=>{
        setCount4(prevCount=>prevCount +1)
    }
    const decrement4=()=>{
        if(count4>0){
            setCount4(prevCount => prevCount - 1)
            }
    }
    const increment5=()=>{
        setCount5(prevCount=>prevCount +1)
    }
    const decrement5=()=>{
        if(count5>0){
            setCount5(prevCount => prevCount - 1)
            }
    }
    return (
        <div>
            <table className='table table-striped'>
                <thead>
                    <tr className='table-dark'>
                        <th scope="col">Product ID</th>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                      <td>1</td>
                      <td><img src='./assets/smartwatch.jpg' /></td>
                      <td>MI Watch</td>
                      <td>₹1500.00</td>
                      <td><button onClick={decrement1}><img src='./assets/minus.png' id='imagee' /></button>{count1}<button onClick={increment1}><img src='./assets/plus.png'id='imagee' /></button></td>
                      <td>₹</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td><img src='./assets/smartwatch.jpg' /></td>
                      <td>Boat Watch</td>
                      <td>₹2700.00</td>
                      <td><button onClick={decrement2}><img src='./assets/minus.png' id='imagee' /></button>{count2}<button onClick={increment2}><img src='./assets/plus.png'id='imagee' /></button></td>
                      <td>₹</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td><img src='./assets/smartwatch.jpg' /></td>
                      <td>FastTrack watch</td>
                      <td>₹1300.00</td>
                      <td><button onClick={decrement3}><img src='./assets/minus.png' id='imagee' /></button>{count3}<button onClick={increment3}><img src='./assets/plus.png'id='imagee' /></button></td>
                      <td>₹</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td><img src='./assets/smartwatch.jpg' /></td>
                      <td>Samsung watch</td>
                      <td>₹1800.00</td>
                      <td><button onClick={decrement4}><img src='./assets/minus.png' id='imagee' /></button>{count4}<button onClick={increment4}><img src='./assets/plus.png'id='imagee' /></button></td>
                      <td>₹</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td><img src='./assets/smartwatch.jpg' /></td>
                      <td>Apple watch</td>
                      <td>₹3000.00</td>
                     <td><button onClick={decrement5}><img src='./assets/minus.png' id='imagee' /></button>{count5}<button onClick={increment5}><img src='./assets/plus.png'id='imagee' /></button></td>
                      <td>₹</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
