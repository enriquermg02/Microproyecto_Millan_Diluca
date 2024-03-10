import useJuegos from "../hooks/JuegosLoad"
import {createUserWithEmail,SingInwithEmail,singInGoogle,singOut} from "../controllers/auth"
import { useNavigate } from "react-router-dom"
import styles from './Intermedio.module.css'

const Intermedio = () => {


    const navigate= useNavigate()
    const redirectSignIn= ()=>{

        (navigate("/sign"))
    }

    const redirectSignGoogle= ()=>{
        (navigate("/SingGoogle"))
        
    }

  return (
    <div className={styles.conteiner}>
      <h1 className={styles.titulo}>¿Registrarte normal o con Google?</h1>
    
      <div className={styles.registro}>
        
        <button onClick={ redirectSignIn} className={styles.Normal}>Normal</button>
        <button onClick={redirectSignGoogle} className={styles.Google}>Google</button>

      </div>
    </div>
  )
}

export default Intermedio