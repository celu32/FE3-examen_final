/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import styles from './Detail.module.css'


const Detail = () => {

  const {id} = useParams();

  const [datos, setDatos] = useState([]);
  const getData = async () => {
    const data = await
    fetch('https://jsonplaceholder.typicode.com/users/'+ id)
    const convert = await data.json();
    setDatos(convert)
    }

    useEffect(() => {
      getData();
    }, [id]);


  return (
   
      <div className={styles.detail}>
      <img src='/doctor.jpg' alt='imagen_doctor' />
      <div> 
        <h2> {datos.name} </h2>
        <ul>
          <li>Email: {datos.email} </li>
          <li>Phone: {datos.phone}</li>
          <li>Website: {datos.website}</li>
        </ul>
      </div>
    </div>
    
    
    
  )
}

export default Detail