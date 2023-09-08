import React, { useState } from 'react'
import {Tooltip,Title,ArcElement,Legend} from 'chart.js'
import { Doughnut } from 'react-chartjs-2';
import { useEffect } from 'react';
import axios from 'axios';
// ChartJS.register(
//     Tooltip,Title,ArcElement,Legend
// )

export const DoughnutChart = () => {
    const [value,setValue]=useState([])
    const label=[]
    const pri=[]

    useEffect(() => {
        getting()
     }, [])
 
 
     const getting = () => {
         axios.get('http://127.0.0.1:8080/app/prdd/')
             .then(res => {
                 setValue(res.data)
             })
     }
     value.map((item)=>{
        label.push(item.name)
        pri.push(item.price)
     })
     const data={
        datasets:[{
                data:pri,
                backgroundColor:['red','pink','yellow','blue','green','black','pink','grey','violet']
            }
        ],
        labels:label
        }
  return (
    <div>
        <h1>DoughnutChart</h1>
        <Doughnut data={data} />
    </div>
  )
}
