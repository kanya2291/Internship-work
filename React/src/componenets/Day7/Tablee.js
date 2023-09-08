import React, { useState } from 'react'
import ProductRow from './ProductRow';
function Tablee(){
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
  const [amount,setAmount]=useState(0)

  const updateAmount=(price,count)=>{
    setAmount(amount+price * count);
  }
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
      {
        product.map((u) => {
             return <ProductRow id={u.SNO} key={u.SNO} name={u.Name} img={u.Image} price={u.price} updateTotalAmount={updateAmount} ></ProductRow>
               })
         }  
         <tr>
            <td colSpan={5} style={{textAlign:'right'}}>
                GrandTotal:
            </td>
            <td>{amount}</td>
         </tr>
         </tbody>
         </table>
)
        }
export default Tablee;