import { Routes,Route } from 'react-router-dom'
// import {Task1_1 } from './Task1_1'
// import { Task1_2 } from './Task1_2'
// import { Task2 } from './Task2'
// import { Task3 } from './Task3'
import { NavLink } from 'react-router-dom'
import './Navstyles.css'

function Navbar(){
    return(
        <nav className='primary-nav' >
            <NavLink to='/Task1_1' > Task1_1</NavLink>
            <NavLink to='/Task1_2' >TAsk1_2</NavLink>
            <NavLink to='/Task2'>Task2</NavLink> 
            <NavLink to='/Task3' >Task3</NavLink> 
            <NavLink to='/Products' >Products</NavLink> 
         </nav>
    )
}
export default Navbar;