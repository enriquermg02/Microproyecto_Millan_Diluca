import { collection,doc,getDoc,getDocs, query } from "firebase/firestore";
import {db} from "../firebase"



// export async function getGrupos(){

//     const groupsCollection=collection(db,"Clubes")

//     const groupsDoc = await getDocs(groupsCollection)

//     const groups = groupsDoc.docs.map(doc=> doc.data())
    
//     return groups

// }

export async function getGrupos() {
    const groupsCollection=collection(db,"Clubes")
    const groupsDocs = await getDocs(groupsCollection);

    const grupos = groupsDocs.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
    }));

    return grupos;
}




export async function getGrupo(nombre){

    const groupsCollection=collection(db,"Clubes")
    const grupoQuery= query(groupsCollection,where("nombre","==" , nombre))
    const grupo = await getDoc(grupoQuery)

    return grupo

}


export async function buscarGrupo(numero){

  console.log(typeof(JSON.stringify(numero)))
    
    const grupoDoc= await getDoc(doc(db,"Clubes",JSON.stringify(numero)))

    const grupo=grupoDoc.data()
    
    

    return grupo
  
}
