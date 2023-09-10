/* eslint-disable react/no-deprecated */
/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { render } from "react-dom";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './routes/Home.jsx'
import Detail from './routes/Detail.jsx'
import Contact from './routes/Contact.jsx'
import Favs from './routes/Favs.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}>
              <Route path='/home' element={<Home/>} />
              <Route path='/dentist/:id' element={<Detail/>} />
              <Route path='/favs' element={<Favs/>} /> 
              <Route path='/contacto' element={<Contact/>} /> 
            </Route>
        </Routes>
    </BrowserRouter>
    
  </React.StrictMode>

);
