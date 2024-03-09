import { collection,getDoc,getDocs } from "firebase/firestore";
import {db} from "../firebase"



export async function getGrupos(){

    const groupsCollection=collection(db,"Clubes")

    const groupsDoc = await getDocs(groupsCollection)

    const groups = groupsDoc.docs.map(doc=> doc.data())
    console.log(groups)
    return groups

}