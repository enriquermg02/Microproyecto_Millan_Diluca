import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import {createUserWithEmail,SingInwithEmail,singInGoogle,singOut} from "../controllers/auth"
import {useUser} from "../context/user"
import {createUser} from "../controllers/usuario"
import MenuDesplegable from "../Components/MenuDesplegable"
import useJuegos from "../hooks/JuegosLoad"
import GameCard from "../Components/GameCard"



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

    return (
    <div>

        <div style={{
        display: "flex",
        flexDirection:"column"

      }}>
        Nombre
        <input value={name} onChange={e =>  setName(e.target.value) }></input>
        Apellido
        <input value={lastName} onChange={e =>  setLastName(e.target.value) }></input>
        UserName
        <input value={username} onChange={e =>  setUsername(e.target.value) }></input>
        Email
        <input value={email} onChange={e =>  setEmail(e.target.value) }></input>
        Password
        <input value={password} onChange={e =>  setPassword(e.target.value) }></input>
        <MenuDesplegable/>
        {/* <div>{currentuser ? (<div>{currentuser.email}</div>):("..cargando")} */}
        {juegos?.map(({ id, titulo}) => (
            <GameCard key={titulo + id} id={id} titulo={titulo} juego = {juego} setJuego = {setJuego} />
        ))}

        <button onClick={ handleSignin}>SIGN</button>
        
        <button onClick={handleLogingGoogle} disabled = {!juego || !username}>Deseas registrarte con Google</button>

        </div>
    





    </div>)
}