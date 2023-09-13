/* eslint-disable no-unused-vars */
import Card from "../components/Card";
import React, { useState , useEffect } from "react";

const Favs = () => {
    
  const localStorageFav = localStorage.getItem('fav');

  let odontologos = JSON.parse(localStorageFav) || [];
  
  return (
    <>
      <h1>Favoritos</h1>
      <div className='card-grid'>
      {odontologos.map(odontologo => (
          <Card key={odontologo.id} name={odontologo.name} username={odontologo.username} id={odontologo.id} />
        ))}
      </div>
    </>
  );
};

export default Favs;

