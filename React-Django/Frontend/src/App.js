import React from 'react'
import { BrowserRouter ,Routes,Route } from 'react-router-dom'
import Add from './components/Add'
import Update from './components/Update'
import AppRouter from './components/AppRouter'
import Home from './components/Home'
import Insert from './components/Insert'
import Delete from './components/Delete'
import Extra from './components/Extra'
import BarChart from './components/BarChart'
import { Doughnut } from 'react-chartjs-2'
import { DoughnutChart } from './components/DoughnutChart'
import StudentTable from './components/StudentTable'
import ProductsTable from './components/ProductsTable'

function App(){
    return (
      // <StudentTable />
        <ProductsTable />
      

    )
}
export default App