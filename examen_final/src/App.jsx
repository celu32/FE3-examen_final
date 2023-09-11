/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import './App.css'
import { Outlet} from "react-router-dom"
import Footer from './components/Footer'
import Header from './components/Header'
import { ContextProvider } from './context/ContextProvider'


function App() {
  
  return (
    <>
      <Header/>
      <ContextProvider>
        <Outlet />
      </ContextProvider>
      <Footer/>
    </>
    
     
    
  )
}

export default App

