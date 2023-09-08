import React, { useState } from 'react'
import { Tooltip, Title, ArcElement, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2';
import { useEffect } from 'react';
import axios from 'axios';


export const PieChart = () => {
    const [value, setValue] = useState([])
    const label = []
    const pri = []

    useEffect(() => {
        getting()
    }, [])


    const getting = () => {
        axios.get('http://127.0.0.1:8080/app/prdd/')
            .then(res => {
                setValue(res.data)
            })
    }

    value.map((item) => {
        label.push(item.name)
        pri.push(item.price)
    })

    const data = {
        datasets: [{
            data: pri,
            backgroundColor: ['red', 'pink', 'yellow', 'blue', 'green', 'black', 'pink', 'grey', 'violet']
        }],
        labels: label
    }

    return (
        <div>
            <h1>PieChart</h1>
            <Pie data={data}  />
        </div>
    )
}
