

export default function GameCard({titulo,descripcion,genero,juego,setJuego}){
    const handleClick = (titulo) => {
        setJuego(titulo)
       
        
    }

    return (
    <div  onClick={(ev)=> {handleClick(ev.currentTarget.textContent)}}>

        <div>{titulo}</div>
        <div>{descripcion}</div>
        <div>{genero}</div>
        
    </div>)
}