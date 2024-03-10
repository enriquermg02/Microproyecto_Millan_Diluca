import {buscarUsuario} from "../controllers/usuario"
import {getGrupo} from "../controllers/grupos"
import {useUser} from "../context/user"
import GameCard from "./GameCard"
import { useEffect, useState } from "react"
import {buscarJuego} from "../controllers/juegos"
import {buscarGrupo} from "../controllers/grupos"
import {getUsuario,cambiarGrupo} from "../controllers/usuario"

export default function GroupCard(id){
    
    const [grupo,setGrupo]= useState(null)
    const [grupoP,setGrupoP]= useState(null)
    const currentuser=useUser()
    





    useEffect( ()=>{


        async function load(){
            //objeto
            const grupos=  await buscarGrupo(id.id)
            setGrupo(grupos)
            
        }
        load()
    },[])


    useEffect(()=>{
        if(currentuser){

            const uwu=async ()=>{
                console.log("Aparecio")
                
                const usuario= await getUsuario(currentuser.email)
                
                setGrupoP(usuario.grupos)

            }
            
            uwu()
        }

    }

    ,[currentuser])


    return (
    <div>

        {/* <div>{id}</div> */}
        
        {grupo ? (
            
            <div>{grupo.nombre}</div>

        ):("Cargando")
        
        
        }
        
         <button onClick={()=>{
            console.log(grupoP)
            
            let index = grupoP.indexOf(id.id);

            grupoP.splice(index, 1);
            cambiarGrupo(currentuser.email,grupoP)

         }}
         
         >UNSUBSCRIBE</button> 
        

     

    </div>)
}