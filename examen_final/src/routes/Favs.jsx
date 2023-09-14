/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import Card from "../components/Card";
import React, { useState , useEffect } from "react";

const Favs = () => {
    
  const [odontologos, setOdontologos] = useState(JSON.parse(localStorage.getItem('fav')) || []);
 
  return (
    <div className="fav">
      <img src='./8.jpg' />
      <h1>FAVORITOS</h1>
      <div className='card-grid'>
      {odontologos.map(odontologo => (
          <Card key={odontologo.id} name={odontologo.name} username={odontologo.username} id={odontologo.id} setOdontologos={setOdontologos}/>
        ))}
      </div>
    </div>
  );
};

export default Favs;


  