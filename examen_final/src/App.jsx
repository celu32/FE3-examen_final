/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import './App.css'
import { Outlet} from "react-router-dom"
import Footer from './components/Footer'
import Header from './components/Header'
import Section from './components/Section'


function App() {
  
  return (
    
    <>
      <Header/>
      <Outlet /> 
      <Section> </Section>
      <Footer/>
    </>
       
  )
}

export default App

