import {buscarUsuario} from "../controllers/usuario"
import {getGrupo} from "../controllers/grupos"
import {useUser} from "../context/user"
import GameCard from "./GameCard"
import { useEffect, useState } from "react"
import {buscarJuego} from "../controllers/juegos"
import styles from './GroupCard.module.css'
import { Link } from "react-router-dom"
import {getUsuario} from "../controllers/usuario"




export default function GroupCard({id,nombre,descripcion,videojuegos}){
    
    const user= useUser()
    
    //esto es diferente, hay que tener ojo con esto
    const [Juegos,setJuegos]=useState([])
    const [subscrito,setSubscrito]=useState(false)
    

    const uwu = async () => {
        // Utiliza Promise.all para esperar que todas las Promesas se resuelvan
        const resultados = await Promise.all(videojuegos.map(async (element) => {
            const game = await buscarJuego(element);
            setJuegos(jue => [...jue, game]);
            //console.log(element);
            // console.log(game.titulo);
            return game;  // Puedes devolver el resultado si es necesario
        }));
    
        // Devuelve los resultados si es necesario
        return resultados;
    }
    
    useEffect(() => {
        const haha = async () => {
            // Espera a que uwu() se complete antes de realizar otras acciones
            const kf = await uwu();
            //console.log('Proceso uwu completo:', kf);
        }
    
        haha();
    }, []);

    useEffect(()=>{
        if(user){

            const uwu=async ()=>{
               
                
                const usuario= await getUsuario(user.email)
                
                const gruposUsuario=usuario.grupos

                if(gruposUsuario.includes(id)){
                    setSubscrito(true)
                }
               
               

            }
            
            uwu()
        }

    }

    ,[user])

    function handleClick(user,id){
        buscarUsuario(user,id) 
        setSubscrito(true)
    }


    return (
    <div className={styles.conteiner}>

        <h1 className={styles.titulo}>{id}</h1>   
        <h1 className={styles.titulo}>{nombre}</h1>
        <div className={styles.titulo} >{descripcion}</div>
        

        <div>
        {Juegos?.map(({  titulo, descripcion, genero }) => (
            <GameCard  key={titulo + nombre} titulo={titulo} descripcion={descripcion} genero={genero}></GameCard>
        ))} 

        </div>
        {subscrito? (""):(<button onClick={()=>{ handleClick(user.email,id) }} className={styles.button}>Subscribe</button>)}
        
        <Link to={"/AppPage"}><button className={styles.button}>Regresar</button></Link> 
        

    </div>)
}