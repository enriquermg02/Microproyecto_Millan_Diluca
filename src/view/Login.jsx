import { useEffect, useState } from "react"
import {createUserWithEmail,SingInwithEmail,singInGoogle,singOut} from "../controllers/auth"
import {useUser} from "../context/user"
import { useNavigate } from "react-router-dom"
import style from './Login.module.css'


export default function Login(){
    const navigate= useNavigate()
    const user= useUser()
    useEffect(()=>{
        if(user){
            navigate("/AppPage")
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



    return (
    <div className={style.conteiner}>

        <h1 className={style.titulo}>Email</h1>
        <input value={email} onChange={e =>  setEmail(e.target.value) } className={style.email}></input>
        <h1 className={style.titulo}>Password</h1>
        <input value={password} onChange={e =>  setPassword(e.target.value) }></input>

        <button onClick={ handleLogin}>LOGIN</button>
        <button onClick={handleLogingGoogle}>GOOGLE</button>
        <button onClick={singOut}>SING OUT</button>
        <button onClick={()=>{console.log(user) }
        }>A VER</button>
       





    </div>)
}