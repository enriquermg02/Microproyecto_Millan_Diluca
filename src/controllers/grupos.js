import { collection,getDoc,getDocs } from "firebase/firestore";
import {db} from "../firebase"



export async function getJuegos(){

    const groupsCollection=collection(db,"Juegos")

    const groupsDoc = await getDocs(groupsCollection)

    const groups = groupsDoc.docs.map(doc=> doc.data())
    console.log(groups)
    return groups

}

