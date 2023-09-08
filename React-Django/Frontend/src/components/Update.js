import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'

function Update(){
  const {id}=useParams();
  const [data,setData]=useState([])
  const navigat=useNavigate()

  useEffect(()=>{
    axios.get('http://127.0.0.1:8080/app/prd/'+id+'/')
    .then(res=>{setData(res.data)
    })
    .catch(err=>console.log(err))
  },[])

  function handleSubmit(event){
    event.preventDefault()
    axios.put('http://localhost:8080/app/prd/'+id+'/',data)
    .then(res=>{
      alert("data updated successfully !!!!");
      navigat('/')
    })
  }
  return(
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-light p-5'>
                <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="id" className="form-label">ID</label>
                    <input type="number" disabled className="form-control"  value={data.pid}/>
                </div>
                <div>
                    <label htmlFor="pid" className="form-label">PersonID</label>
                    <input type="number" className="form-control"  value={data.pid}
                    onChange={e=>setData({...data,pid:e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="name" className="form-label">FirstName</label>
                    <input type="text" className="form-control" value={data.fname}
                     onChange={e=>setData({...data,fname:e.target.value})} />
                </div>
                <div>
                    <label htmlFor="name" className="form-label">LastName</label>
                    <input type="text" className="form-control" value={data.lname}
                     onChange={e=>setData({...data,lname:e.target.value})} />
                </div>
                <div>
                    <label htmlFor="college" className="form-label">Email</label>
                    <input type="email" className="form-control"  value={data.email}
                   onChange={e=>setData({...data,email:e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="course" className="form-label">Course</label>
                    <input type="text" className="form-control"   value={data.course}
                    onChange={e=>setData({...data,course:e.target.value})}/>
                </div><br></br>
                <button type="submit" className="btn btn-primary">Update</button>
                </form>
            </div>
        </div>
  )
}

export default Update