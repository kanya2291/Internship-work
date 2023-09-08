import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale, //y
    Tooltip,
    Legend
} from 'chart.js'
import { Bar } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto'


function BarChart() {
    const [value, setValue] = useState([])
    const dataTable = []
    const lable = []


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
        dataTable.push(item.price)
        lable.push(item.name)

    })
    // console.log(l)
    const databar = {
        labels: lable,
        datasets: [
            {
                label: '2023',
                data: dataTable,
                backgroundColor: 'aqua',
                borderColor: 'black',
                borderWidth: 1,
                borderRadius: 5,
                hoverBackgroundColor: 'grey',
                hoverBorderRadius: 10,
            }
        ]
    }
    const options = {
        indexAxis: 'x',
        plugins: {
            legend: {
                position: "right"
            },
            title: {
                display: true,
                text: "Product Prices Barchart"
            }
        },
        scales: {
            y: {
                title: {
                    display: true,
                    text: 'price'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'ProductNames'
                }
            }

        }
    }
    return (
        <div>
            <div >
                <h1>BarChart</h1>
                <Bar
                    data={databar}
                    options={options}></Bar>
            </div>
        </div>
    )
}

export default BarChart