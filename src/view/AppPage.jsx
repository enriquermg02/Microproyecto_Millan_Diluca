import { useEffect, useState } from "react"
import useJuegos from "../hooks/JuegosLoad"

import {createUserWithEmail,SingInwithEmail,singInGoogle,singOut} from "../controllers/auth"
import {useUser} from "../context/user"
import { useNavigate,Link } from "react-router-dom"
import GameCard from "../Components/GameCard"


export default function AppPage(){
    const navigate= useNavigate()
    const user= useUser()

    const juegos=useJuegos()

    useEffect(()=>{
        if(!user){
            navigate("/login")
        }

    }

    ,[user,navigate])

    

    


    return (
    <div>

        
        <button onClick={singOut 
        }>SING OUT</button>
        <button onClick={()=>{console.log(user) }
        }>A VER</button>
        <Link to="/login">Dale aqui para ir a login</Link>  

        {juegos?.map(({titulo,descripcion,genero}) => (
    
        <div>
            <div>{titulo}</div>
            <div>{descripcion}</div>
            <div>{genero}</div>

        </div>
    
))}

    </div>)
}