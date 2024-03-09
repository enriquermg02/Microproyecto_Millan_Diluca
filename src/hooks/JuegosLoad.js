import {useEffect, useState} from "react"
import {getJuegos} from "../controllers/juegos"



export default function useJuegos(){
    const [juegos,setJuegos]= useState(null)

    useEffect( ()=>{


        async function load(){
            const juegos=  await getJuegos()
            setJuegos(juegos)
            
        }
        load()
    },[])

    return juegos;
}