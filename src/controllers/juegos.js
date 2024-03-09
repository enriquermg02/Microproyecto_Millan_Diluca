import { collection,getDoc,getDocs } from "firebase/firestore";
import {db} from "../firebase"



export async function getJuegos(){

    const groupsCollection=collection(db,"Juegos")

    const groupsDoc = await getDocs(groupsCollection)

    const juegos = groupsDoc.docs.map(doc=> doc.data())
    
    return juegos

}

