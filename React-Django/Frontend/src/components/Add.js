import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

function Add() {
    const [inputData,setInputData]=useState({pid:'',fname:'',lname:'',email:'',course:''})

    const navigat=useNavigate();

    function handleSubmit(event){
        event.preventDefault()
        axios.post("http://localhost:8080/app/prd/",inputData)
        .then(response=>{
            alert("Data added successfully ")
            navigat('/');
        }).catch(err=>console.log(err));
    }
    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-light p-5'>
                <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="pid" className="form-label">PersonID</label>
                    <input type="number" className="form-control" id="pid" 
                    onChange={e=>setInputData({...inputData,pid:e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="name" className="form-label">FirstName</label>
                    <input type="text" className="form-control" id="name"
                     onChange={e=>setInputData({...inputData,fname:e.target.value})} />
                </div>
                <div>
                    <label htmlFor="name" className="form-label">LastName</label>
                    <input type="text" className="form-control" id="name"
                     onChange={e=>setInputData({...inputData,lname:e.target.value})} />
                </div>
                <div>
                    <label htmlFor="college" className="form-label">Email</label>
                    <input type="email" className="form-control" id="college" 
                     onChange={e=>setInputData({...inputData,email:e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="course" className="form-label">Course</label>
                    <input type="text" className="form-control" id="college" 
                     onChange={e=>setInputData({...inputData,course:e.target.value})}/>
                </div><br></br>
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Add