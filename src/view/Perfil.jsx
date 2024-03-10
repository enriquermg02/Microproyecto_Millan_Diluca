import { useEffect, useState } from "react"

import {createUserWithEmail,SingInwithEmail,singInGoogle,singOut} from "../controllers/auth"
import {useUser} from "../context/user"
import { useNavigate } from "react-router-dom"
import {getUsuario,cambiarInfoUsuario} from "../controllers/usuario"
import  QuitGroup  from "../Components/QuitGroup"
import styles from './Perfil.module.css'
import useJuegos from "../hooks/JuegosLoad"
import GameCard from "../Components/GameCard"
 

export default function Perfil(){

    const currentuser=useUser()
    const juegos = useJuegos()
    
    //const user=getUsuario(currentuser.email)
    const [Nombre,setNombre]= useState("")
    const [Apellido,setApellido]= useState("")
    const [game,setGame] = useState("")
    const [mostrarJuegosP,setMostrarJuegosP]= useState(false)
    const[lol,setLol]=useState(null)
    
    
    

    useEffect(()=>{
        if(currentuser){

            const uwu=async ()=>{
                console.log("Aparecio")
                
                const usuario= await getUsuario(currentuser.email)
                

                setNombre(usuario.Nombre)
                setApellido(usuario.Apellido)
                setGame(usuario.juego)
                setLol(usuario.grupos)

            }
            
            uwu()
        }

    }

    ,[currentuser])

    const handleMostrarOcultarJuegos = () => {
        setMostrarJuegosP(!mostrarJuegosP)
      }

    

    return (
        <div className={styles.conteiner}>
            <h1 className={styles.titulo}>Nombre</h1> 
            <input value={Nombre} onChange={e =>  setNombre(e.target.value) } ></input>

            <div>{currentuser ? (<div>{currentuser.email}</div>) : ("..cargando")}</div>


            <h1 className={styles.titulo}>Apellido</h1>
            <input value={Apellido} onChange={e =>  setApellido(e.target.value) }></input>
                            
            <h1 className={styles.titulo}>Juego</h1>
            <h2>{game}</h2>


            <button onClick={handleMostrarOcultarJuegos} className={styles.botonOcultarMostrar}>
                    {mostrarJuegosP ? 'Ocultar juegos' : 'Haz click para elegir tu juego favorito'}
            </button>


            {mostrarJuegosP && (
                <div className={styles.games }>
                    {juegos ? (
                        <div className={styles.color}>
                            {juegos?.map((prop) => (
                                <button className={styles.gameCard} key={prop.id}>
                                    <GameCard key={prop.id} id={prop.id} titulo={prop.data.titulo} juego={game} setJuego={setGame} />
                                </button>
                            ))}
                        </div>
                    ) : (
                        <h2 className={styles.cargando}>Cargando...</h2>
                    )}
                </div>
            )
        }





            <button onClick={()=>{cambiarInfoUsuario(currentuser.email,Nombre,Apellido,game)}} className={styles.buton}>Cambiar</button>


            <div className={styles.grupos}>
            {lol ? (
                                
                lol.map((propa) => (

                <QuitGroup key={propa} id={propa} grupos={propa}></QuitGroup>
                                    
                                    
                ))
                                

                ): ("Cargando")}

            </div>
            <button onClick={()=>{console.log(lol)}}>uwu</button>
 



            
        </div>
        
        )

        

       
}