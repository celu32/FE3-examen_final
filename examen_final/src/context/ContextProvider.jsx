/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { createContext, useState, useEffect} from "react";

export const Context = createContext(undefined)

export function ContextProvider({children}){

    const [datos, setDatos] = useState([]);
    const getData = async () => {
      const data = await
      fetch('https://jsonplaceholder.typicode.com/users')
      const convert = await data.json();
      setDatos(convert)
      }
  
    useEffect(() => {
        getData();
    }, []);

    const value = datos

    return(
        <Context.Provider value={value}>
            {children}
        </Context.Provider>  
    )
}





