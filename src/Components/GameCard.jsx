import styles from './GameCard.module.css'

export default function GameCard({titulo,descripcion,genero,juego,setJuego}){
    const handleClick = (titulo) => {
        setJuego(titulo)
        
    }

    return (
        <div className={styles.conteiner}>
            <button className={styles.button} onClick={(ev)=> {handleClick(ev.currentTarget.textContent)}}>

                <div>{titulo}</div>
                <div>{descripcion}</div>
                <div>{genero}</div>

            </button>

        </div>
    )
}