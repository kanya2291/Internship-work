import React, { useState } from 'react';

function ProductRow(props){
    const {id,img,name,price,qty,updateTotalAmount}=props;
    const [count, setCount] = useState(0);

    const increment = () => {
      setCount(prevCount => prevCount + 1);
      updateTotalAmount(price,1)
    };

    const decrement = () => {
      if (count > 0) {
        setCount(prevCount => prevCount - 1);
        updateTotalAmount(price,-1 )
      }
    };
    return (
      <tr>
        <td>{id}</td>
        <td><img src={img} alt={name} /></td>
        <td>{name}</td>
        <td>₹{price.toFixed(2)}</td>
        <td>
          <button onClick={decrement} >-</button>
          {count}
          <button onClick={increment}>+</button>
        </td>
        <td>₹{count* price}</td>
      </tr>
    );
  };

export default ProductRow;
