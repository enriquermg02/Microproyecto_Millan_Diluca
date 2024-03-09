import { useEffect, useState } from "react"

import {createUserWithEmail,SingInwithEmail,singInGoogle,singOut} from "../controllers/auth"
import {useUser} from "../context/user"
import { useNavigate } from "react-router-dom"

export default function Main(){

    const navigate=useNavigate()
    const user= useUser()
    const redirectSignIn= ()=>{

        (navigate("/Intermedio"))
    }

    const redirectLognIn= ()=>{
        (navigate("/login"))
        
    }


    // useEffect(()=>{
    //     if(user){
    //         navigate("/AppPage")
    //     }

    // }

    // ,[user,navigate])

    return (
    <div>

        

        <button onClick={ redirectSignIn}>SIGN</button>
        <button onClick={redirectLognIn}>LOGIN</button>
        
        




    </div>)
}