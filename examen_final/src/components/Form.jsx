/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react"


const Form = (props) => {

    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [telefono, setTelefono] = useState('')
    const [mensaje, setMensaje] = useState('')

  
    function validar(event){
      event.preventDefault()
  
        if (nombre.trim().length > 5 && email.includes('@') && email.includes('.') && telefono.length > 0 ){
            setMensaje ('')
            props.agregar(nombre,email)
        }
        else {
            setMensaje ('Por favor verifique que la información ingresada sea correcta')
            props.agregar('','')
        }

    }


    return (

        <form onSubmit={validar} >
            <label htmlFor="nombre">Nombre y Apellido </label>
            <input 
                type="text" 
                id="nombre" 
                value={nombre} onChange={(e) => setNombre (e.target.value)} 
            />
            <label htmlFor="email">Email </label>
            <input 
                type="email" 
                id="email" 
                value={email} onChange={(e) => setEmail (e.target.value)} 
            />
            <label htmlFor="email">Teléfono </label>
            <input 
                type="number" 
                id="telefono" 
                value={telefono} onChange={(e) => setTelefono (e.target.value)} 
            />
            <button type="submit"> ENVIAR </button>
            {mensaje ? <p className="mensaje"> {mensaje} </p> : null}
        </form>

         
    )
}

export default Form
