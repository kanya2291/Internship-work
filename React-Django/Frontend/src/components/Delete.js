import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';
function Delete(){
    const {id}=useParams()
    const navigate=useNavigate()
    useEffect(()=>{
        const cofm=window.confirm("Are you sure want to delete?")
        if(cofm){
            axios.get('http://127.0.0.1:8080/app/prd/').then(
                axios.delete("http://localhost:8080/app/prd/"+id+"/")
                .then(
                    alert("data deleted successfully"),
                    navigate('/')
                ).catch(error=>console.error(error))   
            ).catch(error=>console.error(error))
        }
    },[])
    return (
        <></>
    )
}
export default Delete;