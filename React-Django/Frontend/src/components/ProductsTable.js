import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Home'
import Extra from './Extra'

const ProductsTable = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='extra/:id' element={<Extra />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default ProductsTable