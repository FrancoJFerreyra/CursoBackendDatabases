import mongoose from 'mongoose';
import config from '../config';
const admin = require('firebase-admin')
import { initializeApp } from "firebase/app";
import { addDoc, collection, getDocs, doc , getDoc, serverTimestamp, setDoc, deleteDoc, collectionGroup} from 'firebase/firestore';
(async ()=>{
    try{
        const app = await initializeApp(config.firebaseRemote);
        console.log('firebase connected'); 
    }
    catch (err){
        console.log(`error: ${err}`);
    }
})()

class FBContainer{
    constructor(db){
        this.db = db
    }

    listarAll = async()=>{
        const products = await getDocs(collection(this.db, "products"))
        products.forEach(doc => {
            doc.data();
        });
    }

    getProdsCart = async (idCart) =>{
        
    }

    getOne = async(id)=>{
        console.log('id recibido', id);
        const docRef = doc(this.db, "products", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return docSnap.data()
            console.log('encontrado', docSnap);
        }
        else{
            return console.log(`El documento con id: ${id} no existe`);
        }
    }

    update = async (id, newProd)=>{
        console.log(id, newProd);
        const docRef = doc(this.db, "products", id);
        try {
            const updateProd = await setDoc(docRef, newProd);
            console.log('Actualizado');
        } catch (err) {
            console.log(`${err}`);
        }
    }
    createCart = async (data)=>{
        
        const cart = collection(collection(this.db,'Carritos'),`cart ${data.id}`)

        try{
            await addDoc(cart, data);
            console.log('cartData saved');
        }
        catch (err) {
            console.log(err);
        }
    }
    save = async (data)=>{
            console.log('DataRecibed', data);
            const dataWTime = {...data, timeStamp: serverTimestamp()}
            try{
                await addDoc(collection(this.db, "products"),dataWTime)
                console.log('data saved',data);
            }
            catch (err){
                console.log(err);
            }
    }
    delete = async(id)=>{
        const docRef = doc(this.db, "products", id);
        try{
            const deleted = deleteDoc(docRef)
            console.log(`El producto con id :${id} fue eiminado.`);
        }
        catch (err) {
            console.log(`${err}`);
        }
        
    }
}

export default FBContainer;