import {buscarUsuario} from "../controllers/usuario"
import {getGrupo} from "../controllers/grupos"
import {useUser} from "../context/user"
import GameCard from "./GameCard"
import { useEffect, useState } from "react"
import {buscarJuego} from "../controllers/juegos"
import {buscarGrupo} from "../controllers/grupos"
import {getUsuario,cambiarGrupo} from "../controllers/usuario"
import styles from './QuitGroup.module.css'

export default function GroupCard(id){
    
    const [grupo,setGrupo]= useState(null)
    const [grupoP,setGrupoP]= useState(null)
    const currentuser=useUser()
    const [visible,setVisible] = useState(true) //Este state es para que muestre o no el boton de quit group al igual que el titulo del grupo. 

    const handleUnsubscribe = () => {
        console.log(grupoP);
        let index = grupoP.indexOf(id.id);
        grupoP.splice(index, 1);
        cambiarGrupo(currentuser.email, grupoP);
    
        setVisible(false);
      };


    useEffect( ()=>{


        async function load(){
            //objeto
            const grupos=  await buscarGrupo(id.id)
            setGrupo(grupos)
            
        }
        load()
    },[])


    useEffect(()=>{
        if(currentuser){

            const uwu=async ()=>{
                console.log("Aparecio")
                
                const usuario= await getUsuario(currentuser.email)
                
                setGrupoP(usuario.grupos)

            }
            
            uwu()
        }

    }

    ,[currentuser])


    return (
    <div className={styles.conteiner}>
        {/* <div>{id}</div> */}
        {visible && grupo ? (
            
            <div className={styles.nombre}>{grupo.nombre}</div>

        ):""}

        {visible?(
            <button onClick={handleUnsubscribe} className={styles.button}>UNSUBSCRIBE</button>
        ):null}
          

    </div>)

               // console.log(grupoP)
            
            // let index = grupoP.indexOf(id.id);

            // grupoP.splice(index, 1);
            // cambiarGrupo(currentuser.email,grupoP)
}