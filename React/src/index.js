import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';



const root = ReactDOM.createRoot(document.getElementById('root'));

// function MyButtton(){
//   return (
//     <button>Click Here</button>
//   )
// }

// class Menus extends React.Component{
//   render(){
//     let menus=[
//       'Menu','About US','Contact US'
//     ]
//     return (
//       <header>
//         <ul>
//           <li>{menus[0]}</li>
//           <li>{menus[1]}</li>
//           <li>{menus[2]}</li>
//         </ul>
//       </header>
//     )
//   }
// }
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')



);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
