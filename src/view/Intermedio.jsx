import useJuegos from "../hooks/JuegosLoad"
import {createUserWithEmail,SingInwithEmail,singInGoogle,singOut} from "../controllers/auth"
import { useNavigate } from "react-router-dom"

const Intermedio = () => {


    const navigate= useNavigate()
    const redirectSignIn= ()=>{

        (navigate("/sign"))
    }

    const redirectSignGoogle= ()=>{
        (navigate("/SingGoogle"))
        
    }

  return (
    <div>
      
      <button onClick={ redirectSignIn}>Normal</button>
        <button onClick={redirectSignGoogle}>Goolge</button>

    </div>
  )
}

export default Intermedio