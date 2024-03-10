import useJuegos from "../hooks/JuegosLoad"
import {useUser} from "../context/user"
import { useEffect, useState } from "react"
import {createUserWithEmail,SingInwithEmail,singInGoogle,singOut} from "../controllers/auth"
import GameCard from "../Components/GameCard"
import {createUser} from "../controllers/usuario"
import { useNavigate } from "react-router-dom"
import styles from './SigninGoogle.module.css'

const SinginGoogle = () => {
  const juegos = useJuegos()
  
  const user= useUser()
  const navigate= useNavigate()
    
  const [usernameG,setUsernameG]=useState("")
  const [juegoG,setJuegoG] = useState("")
  const [mostrarJuegos,setMostrarJuegos]= useState(false)
  // const[nombreG,setNombreG]=useState("")
  // const[lastNameG,setlastNameG]=useState("")
    

  function separarNombreApellido(nombreCompleto) {
    const partes = nombreCompleto.split(' '); // Divide la cadena en un array de substrings separados por espacios
    const nombre = partes[0]; // El primer elemento es el nombre
    const apellido = partes.slice(1).join(' '); // Los elementos restantes son el apellido
    return { nombre, apellido };
  }

  const handleLogingGoogle= async (e)=> {
    const user = await singInGoogle()
   
}

useEffect(()=>{
  if(user){

    const NombreApellido=separarNombreApellido(user.displayName)
    const username=usernameG
    const juego=juegoG
    const name=NombreApellido.nombre
      
    const crear=async ()=>{await createUser(NombreApellido.nombre,NombreApellido.apellido,username,user.email,"password",juego)}
                            
    crear()
    navigate("/AppPage")


  }

}
,[user,navigate])

const handleMostrarOcultarJuegos = () => {
  setMostrarJuegos(!mostrarJuegos)
}


  return (
    <div className={styles.conteiner}>
      <h1 className={styles.titulo}>UserName</h1>
      <input type="text" value={usernameG} onChange={e =>  setUsernameG(e.target.value)} className={styles.input}/>
      <button onClick={handleMostrarOcultarJuegos} className={styles.botonOcultarMostrar}>
        {mostrarJuegos ? 'Ocultar juegos' : 'Haz click para elegir tu juego favorito'}
      </button>

      {mostrarJuegos && (
                <div className={styles.games}>
                    {juegos ? (
                        <div className={styles.color}>
                            {juegos?.map((prop) => (
                                <button className={styles.gameCard}>
                                    <GameCard key={prop.id} id={prop.id} titulo={prop.data.titulo} juego={juegoG} setJuego={setJuegoG} />
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
          console.log(juegoG)
          console.log(usernameG)
        }}>fff</button>
      <button onClick={handleLogingGoogle} disabled = {!juegoG || !usernameG} className={styles.button}>Haz Click para registrarte</button>

    </div>
  )
}

export default SinginGoogle
