/* eslint-disable no-unused-vars */
import React, { useContext} from 'react';
import { Context } from '../context/ContextProvider';
import { useParams } from 'react-router-dom'
import styles from './Detail.module.css'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  const datos = useContext(Context);
  const params = useParams();

  console.log(params)

  const odontologo = datos.find((element) => element.id == params.id);

  console.log(odontologo)

  return (
    <div className={styles.detail}>
      <img src='/doctor.jpg' alt='imagen_doctor' />
      <div> 
        <h2> {odontologo.name} </h2>
        <ul>
          <li>Email: {odontologo.email} </li>
          <li>Phone: {odontologo.phone}</li>
          <li>Website: {odontologo.website}</li>
        </ul>
      </div>
      
    </div>
  )
}

export default Detail