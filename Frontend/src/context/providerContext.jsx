import {  useState } from "react";
import { DataContext } from "./context";


export function ProviderContext({children}){
    const [token , setToken] = useState(localStorage.getItem('token'))
    const [userData , setUserdata] = useState({}) 

    return <DataContext.Provider value={{token , setToken , userData , setUserdata}}>
        {children}
    </DataContext.Provider>
}