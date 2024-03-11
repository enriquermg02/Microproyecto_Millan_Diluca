import { useEffect, useState } from "react"
import useJuegos from "../hooks/JuegosLoad"
import {useUser} from "../context/user"
import {getJuego} from "../controllers/juegos"
import GameCard from "../Components/GameCard"
import styles from './Buscador.module.css'
import { Link } from "react-router-dom"



export default function Perfil(){

 
    const [titulo,setTitulo]=useState("");
    const [juego,setJuego]=useState(null)
    const [fill,setFill]=useState(null)
    const juegos=useJuegos();




    const submit =async (titulo)=>{
        const prop=await getJuego(titulo)
        setJuego(prop)


    }
    

    return (
        <div className={styles.conteiner}>
            
            <input type="string" value={titulo} onChange={e =>  setTitulo(e.target.value) } onSubmit={submit} className={styles.input}></input>
            
            
            <button onClick={()=>{submit(titulo)}} className={styles.button}>Buscar</button>
            <Link to={"/AppPage"}><button onClick={()=>{submit(titulo)}} className={styles.button}>Regresar</button></Link>


            {juego? (<GameCard titulo={juego.titulo} descripcion={juego.descripcion} genero={juego.genero} juego={fill} setJuego={setFill}></GameCard>):("Cargando")}
            

        </div>
        
        )

        

       
}