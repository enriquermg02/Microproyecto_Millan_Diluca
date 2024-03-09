import useJuegos from "../hooks/JuegosLoad"
import {useUser} from "../context/user"
import { useEffect, useState } from "react"
import {createUserWithEmail,SingInwithEmail,singInGoogle,singOut} from "../controllers/auth"
import GameCard from "../Components/GameCard"
import {createUser} from "../controllers/usuario"
import { useNavigate } from "react-router-dom"




const SinginGoogle = () => {
  const juegos = useJuegos()
  const user= useUser()
  const navigate= useNavigate()
    
  const [usernameG,setUsernameG]=useState("")
  const [juegoG,setJuegoG] = useState("")
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
    

    console.log(user)
}

useEffect(()=>{
  if(user){

    const NombreApellido=separarNombreApellido(user.displayName)
    const username=usernameG
    const juego=juegoG
    const name=NombreApellido.nombre
      
    const crear=async ()=>{await createUser(NombreApellido.nombre,NombreApellido.apellido,username,user.email,"password",juego)}
                            
    crear()
  }

}
,[user,navigate])


  return (
    <div style={{display:"flex",flexDirection:"column"}}>
      UserName

      <input type="text" value={usernameG} onChange={e =>  setUsernameG(e.target.value)}/>

      {juegos?.map(({ id, titulo}) => (
            <GameCard key={titulo + id} id={id} titulo={titulo} juego = {juegoG} setJuego = {setJuegoG} />
        ))}
        
        
        <button onClick={()=>{console.log(juegoG)}}>fff</button>
      <button onClick={handleLogingGoogle} disabled = {!juegoG || !usernameG}>Deseas registrarte con Google</button>

    </div>
  )
}

export default SinginGoogle
