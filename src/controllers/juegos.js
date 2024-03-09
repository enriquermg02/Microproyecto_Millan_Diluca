import { collection,getDoc,getDocs,doc } from "firebase/firestore";
import {db} from "../firebase"



export async function getJuegos(){

    const groupsCollection=collection(db,"Juegos")

    const groupsDoc = await getDocs(groupsCollection)

    const juegos = groupsDoc.docs.map(doc=> doc.data())
    
    return juegos

}


export async function buscarJuego(numero){

    const juegosColection=collection(db,"Juegos")
    const juegoDoc= await getDoc(doc(db,"Juegos",`${numero}`))

    const juego=juegoDoc.data()
    

    return juego
  
}
