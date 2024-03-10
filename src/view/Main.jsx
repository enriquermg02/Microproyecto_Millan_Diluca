import { useEffect, useState } from "react"

import {createUserWithEmail,SingInwithEmail,singInGoogle,singOut} from "../controllers/auth"
import {useUser} from "../context/user"
import { useNavigate } from "react-router-dom"
import styles from './Main.module.css'

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
        <div className={styles.conteiner}>
        <h1>Bienvenido mi pana! </h1>
            <div className={styles.inicio}>
                <button onClick={ redirectSignIn} className={styles.sign }>SIGN</button>
                <button onClick={redirectLognIn} className={styles.login}>LOGIN</button>
            </div>
        </div>
        )
}