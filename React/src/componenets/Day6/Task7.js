import React from 'react';
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

function Task7(){
    const data={
        labels:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        datasets:[
            {
                label:'2022',
                data:[4500,2800,3985,6855,3200,3456,3543,5646,7654,3764,2463,7654],
                backgroundColor:'aqua',
                borderColor:'black',
                borderWidth:1,
                borderRadius:5,
                hoverBackgroundColor:'grey',
                hoverBorderRadius:10,
            },{
                label:'2023',
                data:[1600,5467,8900,8976,5678,4555,4500,2800,3985,6855,3200,3456],
                backgroundColor:'pink',
                borderColor:'black',
                borderWidth:1,
                borderRadius:5,
                hoverBackgroundColor:'grey',
                hoverBorderRadius:10,
               

            }
        ]
    }
    const options={
        indexAxis:'x',
        plugins:{
            legend:{
                position:"right"
            },
            title:{
                display:true,
                text:"Sales in India"
            }
        },
        scales: {
            y: {
              title: {
                display: true,
                text: 'Sales in units'
              }
            }, 
            x: {
                title: {
                  display: true,
                  text: 'Months'
                }
              }

          }    
    }
    return (
        <div>
            <div  style={{ width:'70%',paddingLeft:'500px'}} >
                <Bar 
                data={data}
                options={options}></Bar>
            </div>
        </div>
    )

}
export default Task7;