import { useEffect, useState } from "react"
import useJuegos from "../hooks/JuegosLoad"
import useGrupos from "../hooks/GroupLoad"
import {createUserWithEmail,SingInwithEmail,singInGoogle,singOut} from "../controllers/auth"
import {useUser} from "../context/user"
import { useNavigate,Link } from "react-router-dom"
import GameCard from "../Components/GameCard"
import GroupCard from "../Components/GroupCard"
import styles from './AppPage.module.css'


export default function AppPage(){
    const navigate= useNavigate()
    const user= useUser()
    
    
    const grupos=useGrupos()

    useEffect(()=>{
        if(!user){
            navigate("/login")
        }

    }

    ,[user,navigate])
    
    return (
            <div className={styles.conteiner}>
                <button onClick={singOut} >
                    SING OUT
                </button>
                <button onClick={()=>{console.log(user)}}>
                    A VER
                </button>
                <Link to="/login" className={styles.link}>Dale aqui para ir a login</Link>  
                <Link to="/Perfil" className={styles.link}>Dale aqui para ir a Perfil</Link> 

                {grupos?.map((prop) => (
                    <div key={prop.id} className={styles.card}>
                        <GroupCard key={prop.id} id={prop.id} nombre={prop.data.nombre} descripcion={prop.data.descripcion} videojuegos={prop.data.videojuegos}/>
                    </div>
                ))}
            </div>
    )
}