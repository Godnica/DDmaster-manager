import { Component } from '@angular/core';

/**Avessi voluto usare Cloud firestore */
import { doc, docData, Firestore, collection, getDoc, collectionData } from '@angular/fire/firestore';

import { getDatabase, ref, set } from "firebase/database";



import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  item$: Observable<any>;
  private db = getDatabase()

  constructor( private firestore: Firestore) {
  }
    
    
  

  ngOnInit(){

    /**Avessi voluto usare cloud firestore */
    // console.log(this.db)

    // const userDocRef = doc(this.firestore, "ciccio/2OWhX4yNlTEoKSinw2MF");
    // console.log("iiii", docData(userDocRef))
    // docData(userDocRef).subscribe(el=>{
    //   console.log(el)
    // });

    // const co = collection(this.firestore, "ciccio");
    // const dio = collectionData(co);
    // dio.subscribe(el=>{
    //   console.log(el)
    // });
    
    // console.log(co)
  }


  add(){
    set(ref(this.db, 'users/'), {
      username: "name",
      email: "email",
      profile_picture : "imageUrl"
    });
  }

}
