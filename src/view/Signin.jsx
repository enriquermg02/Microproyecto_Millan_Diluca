import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import {createUserWithEmail,SingInwithEmail,singInGoogle,singOut} from "../controllers/auth"
import {useUser} from "../context/user"
import {createUser} from "../controllers/usuario"

export default function Sign(){

    const navigate= useNavigate()
    const user= useUser()

    

    const [name,setName]=useState("")
    const [lastName,setLastName]=useState("")
    const [username,setUsername]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    


    const handleSignin= async (e)=> {
        const user = await createUserWithEmail(email,password)
        if(user !=null){
            await createUser(name,lastName,username,email,password)
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

    return (
    <div>

        


        <div style={{
        display: "flex",
        flexDirection:"column"

      }}>
        <input value={name} onChange={e =>  setName(e.target.value) }></input>

        <input value={lastName} onChange={e =>  setLastName(e.target.value) }></input>

        <input value={username} onChange={e =>  setUsername(e.target.value) }></input>

        <input value={email} onChange={e =>  setEmail(e.target.value) }></input>

        <input value={password} onChange={e =>  setPassword(e.target.value) }></input>



        <button onClick={ handleSignin}>SIGN</button>
        <button onClick={handleLogingGoogle}>GOOGLE</button>

        </div>
    





    </div>)
}