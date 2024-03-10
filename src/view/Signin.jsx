import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import {createUserWithEmail,SingInwithEmail,singInGoogle,singOut} from "../controllers/auth"
import {useUser} from "../context/user"
import {createUser} from "../controllers/usuario"
import MenuDesplegable from "../Components/MenuDesplegable"
import useJuegos from "../hooks/JuegosLoad"
import GameCard from "../Components/GameCard"
import styles from './Signin.module.css'


export default function Sign(){

    const navigate= useNavigate()
    const user= useUser()
    const juegos = useJuegos()

    const [name,setName]=useState("")
    const [lastName,setLastName]=useState("")
    const [username,setUsername]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [juego,setJuego] = useState("")
    const [mostrarJuegos,setMostrarJuegos]= useState(false)


    const handleSignin= async (e)=> {
        const user = await createUserWithEmail(email,password)
        if(user !=null){
            
            await createUser(name,lastName,username,email,password,juego)
            
        }else{
            alert("Ajuro debes de proporcionar un correo y una contraseña")
        }

    }


    const handleLogingGoogle= async (e)=> {
        const user = await singInGoogle()

        console.log(user)
    }

    useEffect(()=>{
        if(user){
            

            navigate("/AppPage")
        }

    }
    ,[user,navigate])


    const handleMostrarOcultarJuegos = () => {
        setMostrarJuegos(!mostrarJuegos)
      }

    return (
        <div className={styles.conteiner}>

            <h1 className={styles.titulo}>Nombre</h1>
            <input value={name} onChange={e =>  setName(e.target.value)} className={styles.input}></input>

            <h1 className={styles.titulo}>Apellido</h1>
            <input value={lastName} onChange={e =>  setLastName(e.target.value)} className={styles.input}></input>

            <h1 className={styles.titulo}>UserName</h1>
            <input value={username} onChange={e =>  setUsername(e.target.value)} className={styles.input}></input>

            <h1 className={styles.titulo}>Email</h1>
            <input value={email} onChange={e =>  setEmail(e.target.value)} className={styles.input}></input>

            <h1 className={styles.titulo}>Password</h1>
            <input value={password} onChange={e =>  setPassword(e.target.value)} className={styles.input}></input>

            <button onClick={handleMostrarOcultarJuegos} className={styles.botonOcultarMostrar}>
                    {mostrarJuegos ? 'Ocultar juegos' : 'Haz click para elegir tu juego favorito'}
            </button>
            {mostrarJuegos && (
                <div className={styles.games }>
                    {juegos ? (
                        <div className={styles.color}>
                            {juegos?.map((prop) => (
                                <button className={styles.gameCard} key={prop.id}>
                                    <GameCard key={prop.id} id={prop.id} titulo={prop.data.titulo} juego={juego} setJuego={setJuego} />
                                </button>
                            ))}
                        </div>
                    ) : (
                        <h2 className={styles.cargando}>Cargando...</h2>
                    )}
                </div>
            )
        }
            <button onClick={()=>{
                console.log(juego)
                console.log(username)
                }}>fff</button>
            <button onClick={ handleSignin} className={styles.sign}>SIGN</button>

        </div>
    )
}