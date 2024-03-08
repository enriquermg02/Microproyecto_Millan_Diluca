import {useEffect, useState} from "react"
import {getJuegos} from "../controllers/grupos"



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