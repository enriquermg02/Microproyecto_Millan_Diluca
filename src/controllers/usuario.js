import { addDoc, collection,getDoc,getDocs,doc, setDoc,query,where } from "firebase/firestore";
import {db} from "../firebase"


//Modificar usuario, buscar usuario. 

export async function createUser(Nombre,Apellido,UserName,email,password,juego){
    //const id = generateId()
    console.log(typeof(email))
    const userCollection=doc(collection(db,"Usuarios"),email)
    const usuario={Nombre,Apellido,UserName,email,password,grupos:[],juego}
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

    //console.log(typeof(correo))
    const ususariosCollection=collection(db,"Usuarios")
    
    const ususarioQuery= query(ususariosCollection,where("email","==" , correo))
    
   
    const ususario = await getDocs(ususarioQuery)
    
    const us= ususario.docs[0].data();
    
    


    const Nombre=us.Nombre
    const Apellido=us.Apellido
    const grupos=us.grupos
    const juego=us.juego

    
    const data={Nombre,Apellido,grupos,juego}
    console.log(data)
    

    return data

    
}


async function getUser(email){
    const groupsCollection=collection(db,"Clubes")
    const grupoQuery= query(groupsCollection,where("nombre","==" , nombre))
    const grupo = await getDoc(grupoQuery)

    return grupo
}


export async function cambiarInfoUsuario(correo,Nombref,Apellidof,juegof){

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
    const juego=juegof
    

    const data={Nombre,Apellido,UserName,email,grupos,password,juego}

    

    const ref = doc(ususariosCollection,correo);
    
    await setDoc(ref,data);


    
}

export async function cambiarGrupo(correo,grupo){

    const ususariosCollection=collection(db,"Usuarios")
    const ususarioQuery= query(ususariosCollection,where("email","==" , correo))
    const ususario = await getDocs(ususarioQuery)
    
    const us= ususario.docs[0].data();
    
    const Nombre=us.Nombre
    const Apellido=us.Apellido
    const UserName=us.UserName
    const email=us.email
    const password=us.password
    const grupos=grupo
    

    const data={Nombre,Apellido,UserName,email,grupos,password}

    

    const ref = doc(ususariosCollection,correo);
    
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