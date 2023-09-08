  import React, { useState } from 'react'
  
  const Calculator = () => {
    const [input,setInput]=useState(" ")
    const handler=(e)=>{
        setInput(e.target.value);
    }
    return (
      <div>
        <input type='text' value={input} name='input' onChange={handler} />
      </div>
    )
  }
  
  export default Calculator