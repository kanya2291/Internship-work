import React from 'react'
import Update from './Update'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import AppRouter from './AppRouter'
const StudentTable = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<AppRouter />} />
                    <Route path='update/:id' element={<Update />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default StudentTable