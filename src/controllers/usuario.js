import { addDoc, collection,getDoc,getDocs,doc, setDoc } from "firebase/firestore";
import {db} from "../firebase"

//Modificar usuario, buscar usuario. 

export async function createUser(Nombre,Apellido,UserName,email,password){
    const id = generateId()
    const userCollection=doc(collection(db,"Usuarios"),id)
    const usuario={Nombre,Apellido,UserName,email,password,grupos:[]}

    await setDoc(userCollection,usuario)
}


function generateId() {
    const min = 0; 
    const max = 9; 
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber.toString(); 
}




export async function updateCurrentUser(){

    const userCollection=collection(db,"Usuarios")

}
