import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import 'primeicons/primeicons.css';
import { InputNumber } from 'primereact/inputnumber';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPenSquare } from '@fortawesome/free-solid-svg-icons'

function AppRouter() {
  const [ipost, setPost] = useState([]);
  const [visible, setVisible] = useState(false)
  const [footer, footerContent] = useState([])
  const [value1, setValue1] = useState([])
  const [inputData, setInputData] = useState({ pid: '', fname: '', lname: '', email: '', course: '' })
  const [visiblee, setVisiblee] = useState(false)
  const [data, setData] = useState([])
  const [search,setSearch]=useState("")
  // console.log(ipost.filter(user=>user && user.fname && user.fname.toLowerCase().includes("rais")));


  function handleSubmit(event) {
    event.preventDefault()
    axios.post("http://localhost:8080/app/prd/", inputData)
      .then(response => {
        setVisible(false)
        alert("Data added successfully ")
        getData()
      }).catch(err => console.log(err));
  }


  const getData = () => {
    axios.get("http://localhost:8080/app/prd/").then((response) => {
      setPost(response.data)
    }).catch(error => console.error())
  }

  useEffect(() => {
    if(search !==" "){
      axios.get(`http://localhost:8080/app/psearch/?q=${search}`)
      .then(res=>{
        setPost(res.data)
      }).catch(error=>console.log(error))
    }
    else{
      getData()
    }
  }, [search])


  const getUpdatedData = (id) => {
    axios.get('http://127.0.0.1:8080/app/prd/' + id + '/')
      .then(res => {
        setData(res.data)
      })
      .catch(err => console.log(err))
  }

  const deleteProduct = (id) => {
    // console.log(id)
    axios.delete("http://localhost:8080/app/prd/" + id + '/')
      .then(res => {
        alert("Data deleted successfully")
        getData()
      }).catch(error => console.error())
  }

  const submitUpdatedData=(id)=>(event)=>{
    // console.log(id)
    event.preventDefault()
    axios.put('http://localhost:8080/app/prd/'+id+'/',data)
    .then(res=>{
      alert("data updated successfully !!!!");
      getData()
      setVisiblee(false);
    })
  }
  return (
    <div className="App">
      <div>
      <div className='text-end'>
        <Button label="Add" icon="pi pi-external-link" onClick={() => setVisible(true)} />
        <Dialog visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="pid" className="form-label">PersonID</label>
              <input type="number" className="form-control" id="pid"
                onChange={e => setInputData({ ...inputData, pid: e.target.value })} />
            </div>
            <div>
              <label htmlFor="name" className="form-label">FirstName</label>
              <input type="text" className="form-control" id="name"
                onChange={e => setInputData({ ...inputData, fname: e.target.value })} />
            </div>
            <div>
              <label htmlFor="name" className="form-label">LastName</label>
              <input type="text" className="form-control" id="name"
                onChange={e => setInputData({ ...inputData, lname: e.target.value })} />
            </div>
            <div>
              <label htmlFor="college" className="form-label">Email</label>
              <input type="email" className="form-control" id="college"
                onChange={e => setInputData({ ...inputData, email: e.target.value })} />
            </div>
            <div>
              <label htmlFor="course" className="form-label">Course</label>
              <input type="text" className="form-control" id="college"
                onChange={e => setInputData({ ...inputData, course: e.target.value })} />
            </div><br></br>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </Dialog>
        </div>
        <div>
          <form >
            <input type='text' placeholder='search here...' onChange={e=>{setSearch(e.target.value)}} />
          </form>
        </div>
      </div>
      <table className='table table-striped' style={{textAlign:"center"}}>
        <thead>
          <tr>
            <th>S.NO</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Email</th>
            <th>Course</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            ipost.map((d, i) => (
                <tr key={i}>
                  <td>{d.pid}</td>
                  <td>{d.fname}</td>
                  <td>{d.lname}</td>
                  <td>{d.email}</td>
                  <td>{d.course}</td>
                  <td>
                   <FontAwesomeIcon icon={faPenSquare} onClick={() => {
                      setVisiblee(true)
                      getUpdatedData(d.id)
                    }} />
                    <Dialog visible={visiblee} style={{ width: '50vw' }} onHide={() => setVisiblee(false)}>
                      <form onSubmit={submitUpdatedData(data.id)}>
                        <div>
                          <label htmlFor="id" className="form-label">ID</label>
                          <input type="number" disabled className="form-control" value={data.id} />
                        </div>
                        <div>
                          <label htmlFor="pid" className="form-label">PersonID</label>
                          <input type="number" className="form-control" value={data.pid}
                            onChange={e => setData({ ...data, pid: e.target.value })} />
                        </div>
                        <div>
                          <label htmlFor="name" className="form-label">FirstName</label>
                          <input type="text" className="form-control" value={data.fname}
                            onChange={e => setData({ ...data, fname: e.target.value })} />
                        </div>
                        <div>
                          <label htmlFor="name" className="form-label">LastName</label>
                          <input type="text" className="form-control" value={data.lname}
                            onChange={e => setData({ ...data, lname: e.target.value })} />
                        </div>
                        <div>
                          <label htmlFor="college" className="form-label">Email</label>
                          <input type="email" className="form-control" value={data.email}
                            onChange={e => setData({ ...data, email: e.target.value })} />
                        </div>
                        <div>
                          <label htmlFor="course" className="form-label">Course</label>
                          <input type="text" className="form-control" value={data.course}
                            onChange={e => setData({ ...data, course: e.target.value })} />
                        </div><br></br>
                        <button type="submit" className="btn btn-primary">Update</button>
                      </form>
                    </Dialog>
                    {/* <Link to={`/update/${d.id}`} className='btn btn-primary'>Update</Link> */}
                  </td>
                  <td><FontAwesomeIcon icon={faTrash} onClick={() => deleteProduct(d.id)} /></td>
                </tr>
              ))
          }
        </tbody>
      </table>
    </div>
  );

}

export default AppRouter;
