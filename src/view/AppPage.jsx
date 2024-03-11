import { useEffect, useState } from "react"
import useJuegos from "../hooks/JuegosLoad"
import useGrupos from "../hooks/GroupLoad"
import {createUserWithEmail,SingInwithEmail,singInGoogle,singOut} from "../controllers/auth"
import {useUser} from "../context/user"
import { useNavigate,Link } from "react-router-dom"
import TarjetaGrupo from "../Components/TarjetaGrupo"
import GameCard from "../Components/GameCard"
import GroupCard from "../Components/GroupCard"
import styles from './AppPage.module.css'
import Userboton from "../../icons/account.svg"


export default function AppPage(){

    function handleButtonBusqueda(){



    }
    const navigate= useNavigate()
    const user= useUser()
    
    
    const grupos=useGrupos()


    
    function handleButtonBusqueda(){

        navigate("/busqueda")
        
    }

    useEffect(()=>{
        if(!user){
            navigate("/login")
        }

    }

    ,[user,navigate])
    
    return (
            <div className={styles.conteiner}>
                <div className={styles.header}>
                    <button onClick={singOut} className={styles.button}>
                        SING OUT
                    </button> 
                    <button onClick={handleButtonBusqueda} className={styles.button}>BUSQUEDA</button>
                    <Link to="/Perfil" className={`${styles.button} ${styles.user}`}><img src={Userboton} alt="user" /></Link> 
                    
                </div>
                
                <div className={styles.contenedorTarjetas}>
                    {grupos?.map((prop) => (
                        <div key={prop.id} className={styles.card}>
                            <TarjetaGrupo key={prop.id} id={prop.id} nombre={prop.data.nombre}/>
                        </div>
                    ))}
                </div>
                
            </div>
    )
}