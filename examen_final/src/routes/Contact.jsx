/* eslint-disable no-unused-vars */
import React from 'react'
import Form from '../components/Form'
import { useState } from 'react'
import styles from './Contact.module.css'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {

    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')

    function handleSubmit(nuevoNombre, nuevoEmail){
        setNombre(nuevoNombre)
        setEmail(nuevoEmail)
    }

    if(nombre == '' && email == '' ){

      return (
        <div className={styles.contact}>
          <h2>¿NECESITAS MAS INFORMACION?</h2>
          <p>Dejanos tus datos y te contactaremos</p>
          <Form agregar = {handleSubmit}/>
        </div>
      )

    }

    else {

      return (
        <div className={styles.contact} >
           { (nombre && email) ? <p> ¡Muchas Gracias {nombre}! <br/> Nos pondremos en contacto a la brevedad </p> : null }
        </div>
      )

    }


  
}

export default Contact


    

    