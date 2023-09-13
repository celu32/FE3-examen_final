/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import './App.css'
import { Outlet} from "react-router-dom"
import Footer from './components/Footer'
import Header from './components/Header'
import { useContext } from 'react';
import { Context } from './context/ContextProvider';


function App() {
  
  const {theme} = useContext(Context);

  return (
    <div className={theme}>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
    
  )
}

export default App


