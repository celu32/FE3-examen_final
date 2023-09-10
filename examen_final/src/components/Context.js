/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, {createContext, useEffect, useReducer, useState} from 'react';

// Creamos el contexto utilizando createContext()
export const ThemeContext = createContext();

// Creamos el proveedor del contexto que nos permitirá compartir dicho contexto a los componentes hijos.

export const ThemeContextProvider = ({children}) => {

    const [theme, setTheme] = useReducer (themeReducer,{},getThemeFromStorage)

    const changeTheme = (theme) => dispatch({ type: "CHANGE_THEME", payload:
        theme });

    return (
    <ThemeContext.Provider value={{ theme, changeTheme}}>
        {children}
    </ThemeContext.Provider>
    );
}

export const themeReducer = (state, action) => {
  

}



// Creamos una función para obtener los datos del storage
// y otra para almacenarlos

const getThemeFromStorage = () => {
    const localData = localStorage.getItem("theme");
    return localData ? JSON.parse(localData) : [];
    };

const setThemeInStorage = (theme) =>
    localStorage.setItem("theme", JSON.stringify(theme));


export const themes = {
light: {
font: 'rgb(51, 74, 250)',
background: 'rgb(214, 214, 224)'
},
dark: {
font: 'rgb(214, 214, 224)',
background: 'rgb(48, 48, 49)'
}
};



