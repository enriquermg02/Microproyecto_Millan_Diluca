import { addDoc, collection,getDoc,getDocs } from "firebase/firestore";
import {db} from "../firebase"



export async function createUser({Nombre,Apellido,UserName,email,password}){

    const userCollection=collection(db,"Usuarios")

    

    const usuario={Nombre,Apellido,UserName,email,password,grupos:[]}

    await addDoc(userCollection,usuario)
 
}

export async function updateCurrentUser(){

    const userCollection=collection(db,"Usuarios")

}
