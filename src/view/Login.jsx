import { useEffect, useState } from "react"
import {createUserWithEmail,SingInwithEmail,singInGoogle,singOut} from "../controllers/auth"
import {useUser} from "../context/user"
import { useNavigate,Link } from "react-router-dom"
import styles from './Login.module.css'
import {buscarUsuarioPorId} from "../controllers/usuario"


export default function Buscador(){
    const navigate= useNavigate()
    const user= useUser()
    useEffect(()=>{
        if(user){
            const comprove= async (id)=>{

                const nuevo= await buscarUsuarioPorId(id)

                if(nuevo){
                    console.log("es nuebo")
                    navigate("/AppPage")
                }else{
                    
                    
                    

                    navigate("/SingGoogle")
                    
                }

            }
            comprove(user.email)

            
        }

    }

    ,[user,navigate])



    
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
   

    const handleLogin= async (e)=> {
        const user = await SingInwithEmail(email,password)

        
      
        
    }


    const handleLogingGoogle= async (e)=> {
        const user = await singInGoogle()
        console.log(user)
        

    }

    const handleBack= ()=>{
        navigate("/")
    }
    



    return (
    <div className={styles.conteiner}>

        <h1 className={styles.titulo}>Email</h1>
        <input value={email} onChange={e =>  setEmail(e.target.value) } className={styles.input}></input>
        <h1 className={styles.titulo}>Password</h1>
        <input value={password} onChange={e =>  setPassword(e.target.value) } className={styles.input}></input>
        <button className={styles.button} onClick={ handleLogin}>LOGIN</button>
        <button className={styles.button} onClick={handleLogingGoogle}>GOOGLE</button>
        <button className={styles.button} onClick={handleBack}>Regresar</button> 
        {/* <button className={styles.button} onClick={()=>{console.log(user) }
        }>A VER</button> */}

    </div>)
}