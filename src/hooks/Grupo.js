import {useEffect, useState} from "react"


export default function useGrupos(id){
    const [grupos,setGrupos]= useState(null)

    useEffect( ()=>{


        async function load(){
            const grupos=  await buscarGrupo(id)
            setGrupos(grupos)
            
        }
        load()
    },[])

    return grupos;
}