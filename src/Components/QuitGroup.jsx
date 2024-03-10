import {buscarUsuario} from "../controllers/usuario"
import {getGrupo} from "../controllers/grupos"
import {useUser} from "../context/user"
import GameCard from "./GameCard"
import { useEffect, useState } from "react"
import {buscarJuego} from "../controllers/juegos"
import {buscarGrupo} from "../controllers/grupos"


export default function GroupCard(id){
    
    const [grupo,setGrupo]= useState(null)
    const[lol,setlol]=useState(id)

    useEffect( ()=>{


        async function load(){
            //objeto
            const grupos=  await buscarGrupo(lol)
            setGrupo(grupos)
            
        }
        load()
    },[])

    return (
    <div>
        
        {grupo ? (
            
            <div>{grupo.nombre}</div>

        ):("Cargando")
        
        
        }
        
         <button onClick={()=>{console.log(lol)}}>UNSUBSCRIBE</button> 
        

     

    </div>)
}