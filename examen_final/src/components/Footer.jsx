/* eslint-disable no-unused-vars */

import React from 'react'
import styles from './Footer.module.css'
import { useContext } from 'react';
import { Context } from '../context/ContextProvider';

const Footer = () => {

  const {theme} = useContext(Context);

  let clase;

  if(theme == 'dark'){
    clase = styles.footerdark
  }
  else{
    clase = styles.footerlight
  }

  return (
    <footer className={clase} >
        <p>EXAMEN FINAL FRONTEND III - MARIA CELESTE CENERI</p>
    </footer>
  )
}

export default Footer
