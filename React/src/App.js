import React from 'react';
// import ExpenseItem from './componenets/ExpenseItem';
import Task1_1 from './componenets/Day2/Task1_1';
import Task1_2 from './componenets/Day2/Task1_2';
import Task2 from './componenets/Day2/Task2' 
import Img_props from './componenets/Day2/img_pros'
import Task3 from './componenets/Day3/Task3';
import Navbar from './componenets/Day4/Navbar';
import UserProps from './componenets/UserProps';
import Products from './componenets/Products';
import NoMatch from './componenets/NoMatch';
import {createBrowserRouter , RouterProvider ,Route ,Routes } from 'react-router-dom';
import ColorSchemesExample from './componenets/Day4/ ColorSchemesExample';
import FeaturedProducts from './componenets/FeaturedProducts';
import NewProducts from './componenets/NewProducts';
import ClassCompo from './componenets/ClassCompo';
import HookCounter from './componenets/HookCounter'
import HookCounterTwo from './componenets/HookCounterTwo';
import HookMouse from './componenets/HookMouse';
import DataFetching from './componenets/DataFetching';
import Task4 from './componenets/Day5/Task4';
import Task5 from './componenets/Day5/Task5'
import MainNav from './componenets/Day4/MainNav';
import { CounterReducer } from './componenets/CounterReducer';
import { ParentComponent } from './componenets/ParentComponent';
import { UseMemo } from './componenets/UseMemo';
import FocusInout from './componenets/FocusInout';
import Task7 from './componenets/Day6/Task7';
import { LoginForm } from './componenets/LoginForm';
import Calculator from './componenets/Calculator';
import { Task8 } from './componenets/Day7/Task8';
import { Table } from './componenets/Day7/Table';
import Sum from './componenets/Sum';
import Tablee from './componenets/Day7/Tablee'
import Youtube from './componenets/Youtube';

// function App() {
//   const expenses = [
//     {
//       id: 'e1',
//       title: 'Toilet Paper',
//       amount: 94.23,
//       date: new Date(2023, 7, 14),
//     },
//     {
//       id: 'e2',
//       title: 'TV new',
//       amount: 384.3,
//       date: new Date(2021, 2, 12)
//     },
//     {
//       id: 'e3',
//       title: 'new title',
//       amount: 343.3,
//       date: new Date(2021, 3, 23)
//     },
//     {
//       id: 'e4',
//       title: 'HIi',
//       amount: 342.53,
//       date: new Date(2021, 3, 20)
//     },
//   ];
//   return (
//     <>
//       {
//         expenses.map((u) => {
//           return <UserProps key={u.id} id={u.id} name={u.title} age={u.amount} date={u.date} >This is child</UserProps>
//         })
//       }
//     </>

//   );
// }

// function App() {
//   // function displayMessage(e){
//   //   alert("button clicked");
//   //   console.log(e.target)
//   // }
//   // return (
//   //   <input type='text' onChange={(e)=>{displayMessage(e)}} />
//   // )
//   let [counter, updateCounter] = useState(0);

//   return (
//     <>
//       <h1>Counter Value:{counter}</h1>
//       <button onClick={() => {
//         updateCounter(++counter)
//       }}>Change</button>
//     </>
//   ) 
// }


// class App extends React.Component {
  
//   constructor() {
//     super()
//     this.updatePrice = this.updatePrice.bind(this)
//     this.state = {
//       product: "Real me 8 pro",
//       price: 20000
//     }
//   }
//   render() {
//     return (
//       <>
//         <h1>Product:{this.state.product}</h1>
//         <p>Price:{this.state.price}</p>
//         <input type="number" id="price" />
//         < button onClick={this.updatePrice}>Update</button>
//       </>
//     )
//   }
//   updatePrice() {
//     let p = document.getElementById("price").value;

//     this.setState({
//       price: p
//     }, () => {
//       console.log(this.state);
//     })
//   }
// }

// function App(){
//   let price=13903;
//   let [productname,updateName]=useState("Real me 8 pro")
//   return(
//     <>
//     <h1>Product:{productname}</h1>
//     <p>Price:{price}</p>
//     <input id="pname" />
//     <button onClick={()=>
//     {
//       let name=document.getElementById("pname").value;
//       updateName(name);
//     }}>Update</button>
//     </>
//   )
// }

// const router=createBrowserRouter([
//   {path: '/' ,element:<Task1_1 />},
//   {path:'/Task1_1' , element:<Img_props />},
//   {path:'/Task1_2' , element:<App />},
//   {path:'/Task2' , element:<App />}
// ]);
// function App(){

//   return <RouterProvider router={router} />
// }
// function App(){
//   return(
//     <>
//      {/* <Navbar />  */}
//      <ColorSchemesExample /> 
//       <Routes>
//        <Route path='/'  />
//        <Route path='Task1_1' element={<Task1_1 />} />
//       <Route path='Task1_2' element={<Task1_2/>} />
//      <Route path='Task2' element={<Img_props />} />
//      <Route path='Task3' element={<Task3 />} />
//      <Route path='products' element={<Products />} >
//       <Route path='features' element={<FeaturedProducts />} />
//       <Route path='new' element={<NewProducts />} />
//      </Route>
//      <Route path='*' element={<NoMatch />} />
//      </Routes> 
//       </>
  
//   )
// }
 function App(){
  return (
   <>
    {/* <ClassCompo /> */}
    {/* <HookCounter /> */}
    {/* <HookCounterTwo /> */}
    {/* <HookMouse /> */}
    {/* <DataFetching /> */}
    {/* <Task4 /> */}
    {/* <center>
    <Task5 />
    </center> */}
    {/* <MainNav /> */}
    {/* <CounterReducer /> */}
    {/* <ParentComponent /> */}
    {/* <UseMemo /> */}
    {/* <FocusInout /> */}
    {/* <Task7 /> */}
    {/* <LoginForm /> */}
    {/* <Calculator /> */}
    {/* <Task8 /> */}
    {/* <Table /> */}
    {/* <Tablee /> */}
    <Youtube />
     </>
  )
  }
export default App
