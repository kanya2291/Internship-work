import React, { useState,useMemo } from 'react'

export const UseMemo = () => {
    const [count, setCounter] = useState(0)
    const [counterTwo,setCounterTwo]=useState(0)
    const incrementOne=()=>{
        setCounter(count+1)
    }
    const incrementTwo=()=>{
        setCounterTwo(counterTwo+1)
    }
    const isEven=useMemo(()=>{
        let i=0;
        while(i<200000000)i++
        return count %2===0
    },[count])

    return (
        <div>
            <div>
                <button onClick={incrementOne}>count-{count}</button>
                <span >{isEven? 'Even': 'odd'}</span>
            </div>
            <div>
                <button onClick={incrementTwo}>count-{counterTwo}</button>
            </div>
        </div>
    )
}
