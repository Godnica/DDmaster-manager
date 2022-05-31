import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { child, get, getDatabase, push, ref, remove, set } from "firebase/database";
import { Payload } from '../models/payload.model';

@Injectable({
  providedIn: 'root'
})
export class FiredbService {

  private db = getDatabase();

  constructor(private firestore: Firestore) { }

  add(path: string, payload:Payload){
    const postList = ref(this.db, path);
    const newPostref = push(postList)
    set(newPostref, payload)
    return newPostref
  }

  collection(path: string){
    // const postRef = query(ref(this.db, `/${path}`));
    // return postRef
    const dbRef = ref(getDatabase());
    return get(child(dbRef, `/${path}`));
  }

  deleteById(path:string ){
    const postList = ref(this.db, path);
    return remove(postList); //QUiiiiiiiii devi tornare roba
  }

  update(path: string , payload:any){
    const postList = ref(this.db, path);
    return set(postList,payload)
    
  } 
}
