import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import {createUserWithEmail,SingInwithEmail,singInGoogle,singOut} from "../controllers/auth"
import {useUser} from "../context/user"

export default function Sign(){

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
    <div>

        


        <div style={{
        display: "flex",
        flexDirection:"column"

      }}>
        <input value={email} onChange={e =>  setEmail(e.target.value) }></input>

        <input value={password} onChange={e =>  setPassword(e.target.value) }></input>

        <button onClick={ handleLogin}>SIGN</button>
        <button onClick={handleLogingGoogle}>GOOGLE</button>
        
      
        </div>
    





    </div>)
}