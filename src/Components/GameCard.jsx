
export default function GameCard({titulo,descripcion,genero,juego,setJuego}){
    const handleClick = (titulo) => {
        setJuego(titulo)
    }

    return (
    <div style={{boxShadow: "10px 5px 5px black"}} onClick={(ev)=> {handleClick(ev.currentTarget.textContent)}}>

        <div>{titulo}</div>
        <div>{descripcion}</div>
        <div>{genero}</div>
        
    </div>)
}