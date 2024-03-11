import {buscarUsuario} from "../controllers/usuario"
import {getGrupo} from "../controllers/grupos"
import {useUser} from "../context/user"
import GameCard from "./GameCard"
import { useEffect, useState } from "react"
import {buscarJuego} from "../controllers/juegos"
import { useNavigate } from "react-router-dom"
import styles from './TarjetaGrupo.module.css'

export default function TarjetaGrupo({id,nombre}){
    
    const user= useUser()
    //esto es diferente, hay que tener ojo con esto
    const [Juegos,setJuegos]=useState([])

    const navigate= useNavigate()

   const  handleClick = async (email,id) => {
        (navigate(`/grupos/${id}`))
    }

    return (
    <div className={styles.conteiner}>  
        <div className={styles.nombre}>{nombre}</div>
        <button onClick={()=>{handleClick(user.email,id)}} className={styles.button}>Ir al grupo</button>
    </div>)
}