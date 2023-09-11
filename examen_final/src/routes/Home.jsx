/* eslint-disable no-unused-vars */
import React, { useContext} from 'react';
import Card from '../components/Card'
import { Context } from '../context/ContextProvider';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Home = () => {
  
  const datos = useContext(Context)

  return (
   
    <main className="home" >
      <h1>Nuestros Profesionales</h1>
      <div className='card-grid'>
        {datos.map(odontologo => (
          <Card key={odontologo.id} name={odontologo.name} id={odontologo.id} />
        ))}
      </div>
    </main>
    
  )
}



export default Home

