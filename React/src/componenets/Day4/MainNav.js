import React from "react";
import Task1_1 from '../Day2/Task1_1'
import Task1_2 from '../Day2/Task1_2';
import Img_props from '../Day2/img_pros'
import Task3 from '../Day3/Task3';
import Navbar from '../Day4/Navbar';
import {createBrowserRouter , RouterProvider ,Route ,Routes } from 'react-router-dom';
import ColorSchemesExample from '../Day4/ ColorSchemesExample';
import Task4 from '../Day5/Task4'
import Task5 from "../Day5/Task5";
import Task7 from "../Day6/Task7";
import { Task1 }  from "../Day6/Task1";
import  Tablee  from "../Day7/Tablee";

function MainNav(){
    return(
        <>
        {/* <Navbar />  */}
        <ColorSchemesExample /> 
         <Routes>
          <Route path='/'  />
          <Route path='Task1_1' element={<Task1_1 />} />
         <Route path='Task1_2' element={<Task1_2/>} />
        <Route path='Task2' element={<Img_props />} />
        <Route path='Task3' element={<Task3 />} />
        <Route path="Task4" element={<Task4 />} />
        <Route path="Task5" element={<Task5  />} />
        <Route path="Task1" element={<Task1 />} />
        <Route path="Task7" element={<Task7 />} />
        <Route path="Task8" element={<Tablee />} />
        </Routes> 
         </>
    )
}
export default MainNav;