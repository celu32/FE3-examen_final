/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import styles from './Header.module.css'
import {Link} from "react-router-dom"
import { useContext } from 'react';
import { Context } from '../context/ContextProvider';

const Header = () => {

  const {changeTheme} = useContext(Context);

  return (
    <header className={styles.header}>
      <Link to="/home"><img src="./DH.png" alt='DH-logo' /></Link>
      <nav>
        <ul>
          <li><Link to="/home">HOME</Link></li>
          <li><Link to="/favs">FAVORITOS</Link></li>
          <li><Link to="/contacto">CONTACTO</Link></li>
        </ul>
      </nav>
      <button onClick={changeTheme} className={styles.section} >Change theme</button>
    </header>
    
  )
}

export default Header