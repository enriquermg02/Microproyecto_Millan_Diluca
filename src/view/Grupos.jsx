import { useParams } from'react-router-dom'
import { useState,useEffect } from 'react'
import { buscarGrupo } from '../controllers/grupos'
import GroupCard from '../Components/GroupCard'

const Grupos = () => {
    const params = useParams()
    const [nombre, setNombre] = useState(null)
    
    useEffect(() => {
        const fetchData = async () => {
            const res = await buscarGrupo(params.id)
            setNombre(res)
        }
        fetchData()
    },[])

    return (
        <div>
        <div>{nombre ? (
                        <GroupCard id={params.id} nombre={nombre.nombre} descripcion={nombre.descripcion} videojuegos={nombre.videojuegos} />
                    ) : (
                        <h2>Cargando...</h2>
                    )}</div>
        
        </div>
    )
}

export default Grupos
