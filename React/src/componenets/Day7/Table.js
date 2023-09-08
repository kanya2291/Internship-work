import React, { useState } from 'react'
export const Table = () => {
  const product = [{
    SNO: 1,
    Image: './assets/smartwatch.jpg',
    Name: "MI watch",
    price: 1500,
    qty: 15,
  },
  {
    SNO: 2,
    Image: "./assets/smartwatch.jpg",
    Name: "Boat watch",
    price: 2700,
    qty: 1,
  },
  {
    SNO: 3,
    Image: "./assets/smartwatch.jpg",
    Name: "FastTrack watch",
    price: 1300,
    qty: 3,
  },
  {
    SNO: 4,
    Image: "./assets/smartwatch.jpg",
    Name: "Samsung watch",
    price: 1800,
    qty: 11,
  },
  {
    SNO: 5,
    Image: "./assets/smartwatch.jpg",
    Name: "Apple watch",
    price: 3000,
    qty: 0,
  }];
  const [count, setCount] = useState(
    product.map((val) => val.qty)
  );
  // console.log(count)

  const increment = (i) => {
    const newCount = [...count];
    // console.log(newCount)
    newCount[i] = newCount[i] + 1;
    // console.log(newCount)
    setCount(newCount)
  };

  const decrement = (i) => {
    const newCount = [...count];
    if (newCount[i] > 1) {
      newCount[i] = newCount[i] - 1;
      setCount(newCount);
    }
  };
  const GrandTotal = product.reduce(
    (initial, val, i) => {
      return initial + count[i] * val.price;

    }, 0)
  return (
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
        {/* // product.map(u=> { */}
        {/* //      return <ProductRow key={u.SNO} id={u.SNO} img={u.Image} title={u.Title} name={u.Name} price={u.price} ></ProductRow> */}
        {/* //        }) */}

        {product.map((val, i) => 
          <tr>
            <td>{val.SNO}</td>
            <td><img src={val.Image} alt={val.Name} /></td>
            <td>{val.Name}</td>
            <td>₹{val.price.toFixed(2)}</td>
            <td>
              <button onClick={() => decrement(i)}>-</button>
              {count[i]}
              <button onClick={() => increment(i)}>+</button>
            </td>
            <td>₹{count[i] * val.price}</td>
          </tr>
        )}
        <tr>
          <td  style={{textAlign:'right'}} colSpan={5}>GrandTotal:</td>
          <td>₹{GrandTotal.toFixed(2)}</td>
        </tr>
      </tbody>
    </table>
  )
}
