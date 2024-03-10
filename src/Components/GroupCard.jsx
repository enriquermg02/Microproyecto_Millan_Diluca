import {buscarUsuario} from "../controllers/usuario"
import {getGrupo} from "../controllers/grupos"
import {useUser} from "../context/user"
import GameCard from "./GameCard"
import { useEffect, useState } from "react"
import {buscarJuego} from "../controllers/juegos"

export default function GroupCard({id,nombre,descripcion,videojuegos}){
    
    const user= useUser()
    //esto es diferente, hay que tener ojo con esto
    const [Juegos,setJuegos]=useState([])
    

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


    return (
    <div>

        <div>{id}</div>   
        <div>{nombre}</div>
        <div>{descripcion}</div>
        

        <div>
        {Juegos?.map(({  titulo, descripcion, genero }) => (
            <GameCard  key={titulo + nombre} titulo={titulo} descripcion={descripcion} genero={genero}></GameCard>
        ))} 

        </div>

        <button onClick={()=>{buscarUsuario(user.email,id)}}>Subscribe</button>

    </div>)
}