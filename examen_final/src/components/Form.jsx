/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react"


const Form = (props) => {

    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [mensaje, setMensaje] = useState('')

  
    function validar(event){
      event.preventDefault()
  
        if (nombre.trim().length >= 1 && email.includes('@') ){
            setMensaje ('')
            props.agregar(nombre,email)
        }
        else {
            setMensaje ('Por favor chequea que la información sea correcta')
            props.agregar('','')
        }

    }


    return (

        <form onSubmit={validar} >
            <label htmlFor="nombre">INGRESA TU NOMBRE</label>
            <input 
                type="text" 
                id="nombre" 
                value={nombre} onChange={(e) => setNombre (e.target.value)} 
            />
            <label htmlFor="email">INGRESA TU EMAIL </label>
            <input 
                type="email" 
                id="email" 
                value={email} onChange={(e) => setEmail (e.target.value)} 
            />
            <button type="submit"> ENVIAR </button>
            {mensaje ? <p> {mensaje} </p> : null}
        </form>

         
    )
}

export default Form
