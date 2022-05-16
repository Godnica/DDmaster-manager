import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { child, get, getDatabase, query, ref, set } from "firebase/database";
import { Payload } from '../models/payload.model';

@Injectable({
  providedIn: 'root'
})
export class FiredbService {

  private db = getDatabase();

  constructor(private firestore: Firestore) { }

  add(path: string, payload:Payload){
    set(ref(this.db, path), payload.payload);
  }

  collection(path: string){
    // const postRef = query(ref(this.db, `/${path}`));
    // return postRef
    const dbRef = ref(getDatabase());
    return get(child(dbRef, `/${path}`));
  }


}
