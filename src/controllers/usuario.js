import { addDoc, collection,getDoc,getDocs,doc, setDoc,query,where } from "firebase/firestore";
import {db} from "../firebase"


//Modificar usuario, buscar usuario. 

export async function createUser(Nombre,Apellido,UserName,email,password){
    //const id = generateId()
    const userCollection=doc(collection(db,"Usuarios"),email)
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

export async function buscarUsuario(correo,nombreg){

    const ususariosCollection=collection(db,"Usuarios")
    const ususarioQuery= query(ususariosCollection,where("email","==" , correo))
    const ususario = await getDocs(ususarioQuery)
    
    const us= ususario.docs[0].data();
    
    const Nombre=us.Nombre
    const Apellido=us.Apellido
    const UserName=us.UserName
    const email=us.email
    const password=us.password
    const grupos=us.grupos
    grupos.push(nombreg)

    const data={Nombre,Apellido,UserName,email,grupos,password}

    console.log(data)

    const ref = doc(ususariosCollection,correo);
    
    await setDoc(ref,data);


    
}

export async function getUsuario(correo){

    const ususariosCollection=collection(db,"Usuarios")
    const ususarioQuery= query(ususariosCollection,where("email","==" , correo))
    const ususario = await getDocs(ususarioQuery)
    
    const us= ususario.docs[0].data();

    const Nombre=us.Nombre
    const Apellido=us.Apellido
    
    const data={Nombre,Apellido}
    

    return data

    
}


export async function cambiarInfoUsuario(correo,Nombref,Apellidof){

    const ususariosCollection=collection(db,"Usuarios")
    const ususarioQuery= query(ususariosCollection,where("email","==" , correo))
    const ususario = await getDocs(ususarioQuery)
    
    const us= ususario.docs[0].data();
    
    const Nombre=Nombref
    const Apellido=Apellidof
    const UserName=us.UserName
    const email=us.email
    const password=us.password
    const grupos=us.grupos
    

    const data={Nombre,Apellido,UserName,email,grupos,password}

    

    const ref = doc(ususariosCollection,correo);
    console.log(correo)
    console.log(data)
    await setDoc(ref,data);


    
}

// export async function updateUsuario(id,nombre) {
//     const ususariosCollection = collection(db,'Usuarios'); 
//     const ref = doc(ususariosCollection,id);
//     const data = {titulo,descripcion};
//     await setDoc(ref,data);//Añade los datos a la base de datos. 
// }

// export async function updateMovies(id,{titulo, descripcion}) {
//     const moviesCollection = collection(db,'movies'); 
//     const ref = doc(moviesCollection,id);
//     const data = {titulo,descripcion};
//     await setDoc(ref,data);//Añade los datos a la base de datos. 
// }