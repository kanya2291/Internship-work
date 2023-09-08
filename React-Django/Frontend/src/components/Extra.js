import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios";
import pic from "./assests/smartwatch.jpg"
import Home from './Home'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import './breadcumbs.css'

function Extra() {
    const [data, setData] = useState([])
    const { id } = useParams();
    const location = useLocation()

    const getData = () => {
        axios.get('http://127.0.0.1:8080/app/prdd/' + id + '/')
            .then(res => {
                setData(res.data)
            })
            .catch(err => console.log(err))
    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            <nav>
                <Link to="/" className={location.pathname === "/" ? "breadcrumb-active" : "breadcrumb-not-active"}>
                    Home
                </Link>
                <span className="breadcrumb-arrow">&gt;</span>
                <Link to="/productsInfo" className={location.pathname.startsWith(`/extra/${id}`) ? "breadcrumb-active" : "breadcrumb-not-active"}>
                    ProductInfo
                </Link>
            </nav>
            <div class="card" style={{ width: "450px", marginLeft: "400px", marginTop: "150px" }}>
                <img src={pic} class="card-img-top" alt="watch" style={{ width: "400px", height: "350px" }} />
                <div class="card-body">
                    <h4>Product ID:{data.pid}</h4>
                    <h2 class="card-title">Name:{data.name}</h2>
                    <h3 class="card-text">Price:{data.price}</h3>
                    <h3 class="card-text">Quantity:{data.qnty}</h3>
                    <h3 class="card-text">Amount:₹{data.total}</h3>
                    <p class="card-text"><b>Description:</b>{data.des}</p>
                </div>
            </div>
        </div>
    )
}
export default Extra