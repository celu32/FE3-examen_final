/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import {Link} from "react-router-dom"
import styles from './Card.module.css'

const Card = ({ name, id }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className={styles.card} > 
      <Link to={"/dentist/"+id} >
          <img src="./doctor.jpg" alt='imagen_doctor' />
          <p> {name} </p>
      </Link>
      
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton"><img src="./fav.png" alt='fav' /></button>
    </div>
  );
};

export default Card;




