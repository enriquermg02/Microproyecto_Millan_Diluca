import { collection,getDoc,getDocs,doc,query,where } from "firebase/firestore";
import {db} from "../firebase"




// export async function getJuegos(){

//     const groupsCollection=collection(db,"Juegos")
//     //snapshot
//     const groupsDoc = await getDocs(groupsCollection)

//     const juegos = groupsDoc.docs.map(doc=> {
//         //documento
//         doc.data()
        
    
//     }
    
    
//     )
    
//     return juegos

// }

export async function getJuegos() {
    const groupsCollection = collection(db, "Juegos");
    const groupsDocs = await getDocs(groupsCollection);

    const juegos = groupsDocs.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
    }));

    return juegos;
}


export async function buscarJuego(numero){

    const juegosColection=collection(db,"Juegos")
    const juegoDoc= await getDoc(doc(db,"Juegos",`${numero}`))

    const juego=juegoDoc.data()
    

    return juego
  
}

export async function getJuego(titulo){

    const ususariosCollection=collection(db,"Juegos")
    const ususarioQuery= query(ususariosCollection,where("titulo","==" , titulo))
    const ususario = await getDocs(ususarioQuery)
    
    const us= ususario.docs[0].data();

    return us

}
