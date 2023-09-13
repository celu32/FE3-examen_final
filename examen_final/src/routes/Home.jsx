/* eslint-disable no-unused-vars */
import React, { useState, useEffect} from 'react';
import Card from '../components/Card'

const Home = () => {

  const [datos, setDatos] = useState([]);
  const getData = async () => {
    const data = await
    fetch('https://jsonplaceholder.typicode.com/users')
    const convert = await data.json();
    setDatos(convert)
  }

  useEffect(() => {
      getData();
  }, []);


  return (
   
    <main className="home" >
      <h1>Nuestros Profesionales</h1>
      <div className='card-grid'>
        {datos.map(odontologo => (
          <Card key={odontologo.id} name={odontologo.name} username={odontologo.username} id={odontologo.id} />
        ))}
      </div>
    </main>
    
  )
}



export default Home

