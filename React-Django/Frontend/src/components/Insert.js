import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Insert() {
  const [dataa,setData]=useState({pid:"",name:"",price:"",qnty:""})

  const navigatee=useNavigate()


  function handleSubmit(event){
    event.preventDefault();
    // console.log(dataa)
    axios.post("http://localhost:8080/app/prdd/",dataa)
    .then(res=>{
      alert("Data added successfully!")
      navigatee('/')
      
    }).catch(err=>console.log(err))
  }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
    <div className='w-50 border bg-light p-5'>
        <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="pid" className="form-label">ProductID</label>
            <input type="number" className="form-control"  
           onChange={e=>setData({...dataa,pid:e.target.value})}/>
        </div>
        <div>
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" 
            onChange={e=>setData({...dataa,name:e.target.value})}/>
        </div>
        <div>
            <label htmlFor="college" className="form-label">Price</label>
            <input type="number" className="form-control"
            onChange={e=>setData({...dataa,price:e.target.value})}/>
        </div>
        <div>
            <label htmlFor="course" className="form-label">Quantity</label>
            <input type="number" className="form-control"
           onChange={e=>setData({...dataa,qnty:e.target.value})}/>
        </div><br></br>
        <button type="submit" className="btn btn-primary">Insert</button>
        </form>
    </div>
</div>
  )
}

export default Insert