import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { InputText } from 'primereact/inputtext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPenSquare } from '@fortawesome/free-solid-svg-icons'
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import pic from './assests/smartwatch.jpg'
import BarChart from './BarChart';
import { DoughnutChart } from './DoughnutChart';
import { PieChart } from './PieChart';
import { Dropdown } from 'bootstrap';
function Home() {
    const [val, setValue] = useState([])
    const [visible, setVisible] = useState(false)
    const [dataa, setData] = useState({ pid: "", name: "", price: "", qnty: "" })
    const [look, setLook] = useState(false)
    const [udata, uSetData] = useState([])
    const [query, setQuery] = useState(0)
    const [state,setState] =useState("")
    // console.log(val.filter(item=>item.name.toLowerCase().includes("pen")))

    const getting = () => {
        axios.get('http://127.0.0.1:8080/app/prdd/')
            .then(res => {
                setValue(res.data)
            })
    }
    useEffect(() => {
        getting()

    }, [])

    function handleSubmit(event) {
        event.preventDefault();
        // console.log(dataa)
        axios.post("http://localhost:8080/app/prdd/", dataa)
            .then(res => {
                alert("Data added successfully!")
                getting()
                setVisible(false)

            }).catch(err => console.log(err))
    }

    const deleteProduct = (id) => {
        // console.log(id)
        axios.delete("http://localhost:8080/app/prdd/" + id + '/')
            .then(res => {
                alert("Data deleted successfully")
                getting()
            }).catch(error => console.error())
    }
    // const decrement=(d)=>{
    //     axios.patch("http://localhost:8080/app/prdd/"+d.id+'/',{"qnty":d.qnty-1})
    //     .then(res=>{ <option value="DropDown" >Dropdown</option>
    //         getting()
    //      } ).catch(error=>console.log(error))
    // }

    // const increment=(d)=>{
    //     axios.patch("http://localhost:8080/app/prdd/"+d.id+'/',{"qnty":d.qnty+1})
    //     .then(res=>{
    //         getting()
    //     }).catch(error=>console.log(error))
    // }
    const decrement = (id) => {
        console.log("***************")
        axios.put(`http://localhost:8080/app/prdd/${id}/decrement/`)
            .then(res => {
                getting()
            }
            ).catch(error => console.log(error))
    }
    const increment = (id) => {
        console.log("************")
        axios.put(`http://localhost:8080/app/prdd/${id}/increment/`)
            .then(res => {
                getting()
            }
            ).catch(error => console.log(error))
    }
    const grandTotal = () => {
        let total = 0
        val.forEach(item => {
            total += item.qnty * item.price
        })
        return total;
    }

    const getUpdatedDataa = (id) => {
        console.log(id)
        axios.get('http://localhost:8080/app/prdd/' + id + '/')
            .then(res => {
                uSetData(res.data)
            }).catch(error => console.log(error))
    }

    const submitUpdatedData = (id) => (event) => {
        event.preventDefault()
        axios.put('http://localhost:8080/app/upd/' + id + '/', udata)
            .then(res => {
                alert("updated data successfully!!!")
                getting();
                setLook(false);
            })
    }

    // useEffect(() => {
    //     if (query !== "") {
    //         axios.get(`http://127.0.0.1:8080/app/search/?q=${query}`)
    //             .then((res) => {
    //                 setValue(res.data);
    //             })
    //             .catch((err) => console.log(err));
    //     } else {
    //         getting();
    //     }
    // }, [query]);

    useEffect(()=>{

        if(query !== " "){
            // console.log(query)
            axios.get(`http://127.0.0.1:8080/app/search/?q=${query}`)
            .then(res=>{
                setValue(res.data);
                
            })
            .catch(err=>console.log(err))
        }
        else{
            getting()
        }
    },[query])

    // const handleSearch = () =>{
    //     console.log("*********************************")
    //     axios.post('http://127.0.0.1:8080/app/prdd/search/',{ queryyyy : query})
    //       .then((res) => {
    //         console.log(res.data)
    //         // setValue(res.data);
    //         // getting()
    //       })
    //       .catch((err) => console.log(err));
    //   };
    useEffect(()=>{
        if(state !== ""){
            axios.get(`http://127.0.0.1:8080/app/psearchp/${state}/`)
            .then((res)=>{
                setValue(res.data)
                console.log(state)
               
            })
            .catch((err)=>console.log(err))
        }
        else{
            getting()
        }
    },[state])

    // const handleSearching=()=>{
    //     const range=state
    //     axios.post('http://127.0.0.1:8080/app/psearchp/',range)
    //     .then((res)=>{
    //         setValue(res.data)
    //         getting()
    //     })
    //     .catch((err)=>console.log(err))
    // }

    return (
        <div className='App'>
            <div style={{ display: "flex", gap: "400px", marginTop: "20px" }}>
                <div>
                    <Button label="Add" icon="pi pi-external-link" onClick={() => setVisible(true)} />
                    <Dialog visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="pid" className="form-label">ProductID</label>
                                <input type="number" className="form-control"
                                    onChange={e => setData({ ...dataa, pid: e.target.value })} />
                            </div>
                            <div>
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control"
                                    onChange={e => setData({ ...dataa, name: e.target.value })} />
                            </div>
                            <div>
                                <label htmlFor="college" className="form-label">Price</label>
                                <input type="number" className="form-control"
                                    onChange={e => setData({ ...dataa, price: e.target.value })} />
                            </div>
                            <div>
                                <label htmlFor="course" className="form-label">Quantity</label>
                                <input type="number" className="form-control"
                                    onChange={e => setData({ ...dataa, qnty: e.target.value })} />
                            </div>
                            <div>
                                <label htmlFor="course" className="form-label">Description</label>
                                <input type="textarea" className="form-control"
                                    onChange={e => setData({ ...dataa, des: e.target.value })} />
                            </div><br></br>
                            <button type="submit" className="btn btn-primary">Insert</button>
                        </form>
                    </Dialog>
                </div>
                <div>
                    <form>
                        <input type='text' placeholder='search here....' className='search' onChange={e => {
                            setQuery(e.target.value)
                        }
                        } />
                        <select name='price' id='pr' onChange={e=>{setState(e.target.value)}}>
                            <option value="select" >Select Product </option>
                            <option value='0-100'>0-100</option>
                            <option value='100-500'>100-500</option>
                            <option value="500+">Above 500</option>
                            <option value='500-1000'>500-1000</option>
                            <option value='1000+'>Above 1000</option>
                        </select>

                    </form>
                </div>
            </div>
            <table className='table table-striped ' style={{ textAlign: "center" }}>
                <thead >
                    <th scope='col'>Product ID</th>
                    <th scope='col'>Name</th>
                    <th scope='col'>Image</th>
                    <th scope='col'>Price</th>
                    <th scope='col'>Quality</th>
                    <th scope='col'>Total</th>
                    <th scope='col'>Edit</th>
                    <th scope='col'>Delete</th>
                    <th scope='col'>ViewMore</th>
                </thead>
                <tbody>
                    {
                        val
                            // .filter(item=>item.name.toLowerCase().includes(query))
                            .map((d) => (
                                <tr key={d.id}>
                                    <td>{d.pid}</td>
                                    <td>{d.name}</td>
                                    <td><img src={pic} style={{ width: "30px", height: "30px" }}  alt='watch'/></td>
                                    <td>{d.price}</td>
                                    <td><button onClick={() => decrement(d.id)}>-</button>{d.qnty}<button onClick={() => increment(d.id)}>+</button></td>
                                    <td>{d.total}</td>
                                    <td>    
                                        <FontAwesomeIcon icon={faPenSquare} onClick={() => {
                                            setLook(true)
                                            getUpdatedDataa(d.id)
                                        }} />
                                        <Dialog visible={look} style={{ width: '50vw' }} onHide={() => setLook(false)}>
                                            <form onSubmit={submitUpdatedData(udata.id)}>
                                                <div>
                                                    <label htmlFor="id" className="form-label">ID</label>
                                                    <input type="number" disabled className="form-control" value={udata.id} />
                                                </div>
                                                <div>
                                                    <label htmlFor="id" className="form-label">ProductID</label>
                                                    <input type="number" className="form-control" value={udata.pid}
                                                        onChange={e => uSetData({ ...udata, pid: e.target.value })} />
                                                </div>
                                                <div>
                                                    <label htmlFor='name' className='form-label'>Name</label>
                                                    <input type="text" className='form-control' value={udata.name}
                                                        onChange={e => uSetData({ ...udata, name: e.target.value })} />
                                                </div>
                                                <div>
                                                    <label htmlFor='price' className='form-label'>Price</label>
                                                    <input type='number' className='form-control' value={udata.price}
                                                        onChange={e => uSetData({ ...udata, price: e.target.value })} />
                                                </div>
                                                <div>
                                                    <label htmlFor='quantity' className='form-label'>Quantity</label>
                                                    <input type='number' className='form-control' value={udata.qnty}
                                                        onChange={e => uSetData({ ...udata, qnty: e.target.value })} />
                                                </div><br /><br />
                                                <button type='submit' className='btn btn-primary'>Update</button>
                                            </form>
                                        </Dialog>

                                    </td>
                                    <td>
                                        <FontAwesomeIcon icon={faTrash} onClick={() => deleteProduct(d.id)} />
                                    </td>
                                    <td><Link to={`/extra/${d.id}`} className='btn btn-primary'>ViewMore</Link></td>
                                </tr>
                            ))}
                    <tr>
                        <td colSpan={5} style={{ textAlign: "right" }}>GrandTotal:</td>
                        <td>{grandTotal()}</td>
                    </tr>

                </tbody>
            </table>
            <div>
                <div class="row">
                    <div class="col-sm" style={{ width: "30px" }}>
                        <BarChart />
                    </div>
                    <div class="col-sm" style={{ width: "40px" }}>
                        <PieChart />
                    </div>
                    <div class="col-sm" style={{ width: "40px" }}>
                        <DoughnutChart />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home