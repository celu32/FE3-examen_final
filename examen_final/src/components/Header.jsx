/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import styles from './Header.module.css'
import {Link} from "react-router-dom"


const Header = () => {

  

  const onClick = () => {
    

    };
   

  return (
    <header className={styles.header}>
      <img src="./DH.png" alt='DH-logo' />
      <nav>
        <ul>
          <li><Link to="/home">HOME</Link></li>
          <li><Link to="/dentist/:id">ODONTÓLOGO ELEGIDO</Link></li>
          <li><Link to="/favs">FAVORITOS</Link></li>
          <li><Link to="/contacto">CONTACTO</Link></li>
        </ul>
        {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      </nav>
      <button onClick={onClick} className={styles.section} >Change theme</button>
    </header>
    
  )
}

export default Header