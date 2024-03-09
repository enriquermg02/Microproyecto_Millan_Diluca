import {useEffect, useState} from "react"
import {getGrupos} from "../controllers/grupos"
import {getUsuario} from "../controllers/usuario"

export default function useUsuarioP(email){
    const [usuario,setUsuario]= useState(null)

    useEffect( ()=>{


        async function load(){
            const us=  await getUsuario(email)
            setUsuario(us)
            
        }
        load()
    },[])

    return usuario;
}