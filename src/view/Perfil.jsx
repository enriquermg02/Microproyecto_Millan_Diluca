import { useEffect, useState } from "react"

import {createUserWithEmail,SingInwithEmail,singInGoogle,singOut} from "../controllers/auth"
import {useUser} from "../context/user"
import { useNavigate } from "react-router-dom"
import {getUsuario,cambiarInfoUsuario} from "../controllers/usuario"


export default function Perfil(){

    const currentuser=useUser()
    
    //const user=getUsuario(currentuser.email)
    const [Nombre,setNombre]= useState("")
    const [Apellido,setApellido]= useState("")

    const [game,setGame] = useState("")

    useEffect(()=>{
        if(currentuser){

            const uwu=async ()=>{
                console.log("Aparecio")
                const usuario= await getUsuario(currentuser.email)
                setNombre(usuario.Nombre)
                setApellido(usuario.Apellido)

            }
            
            
            uwu()
        }

    }

    ,[currentuser])



    

    return (
    <div style={{
        display: "flex",
        flexDirection:"column"}}>

        

       Nombre <input value={Nombre} onChange={e =>  setNombre(e.target.value) } ></input>

       <div>{currentuser ? (<div>{currentuser.email}</div>):("..cargando")}
       
       
       
       </div>

        Apellido<input value={Apellido} onChange={e =>  setApellido(e.target.value) }></input>
        
        Juego<input value={game} onChange={e =>  setGame(e.target.value) }></input>

        <button onClick={()=>{cambiarInfoUsuario(currentuser.email,Nombre,Apellido)}}>Cambiar</button>


        



    </div>)
}