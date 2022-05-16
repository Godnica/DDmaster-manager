import { Component } from '@angular/core';
import { Event, RouterEvent, Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
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
  id?: number
  menu_visible!:boolean
  

  constructor(
    private router:Router,
  ) {
  }
    
  ngOnInit(){
  //   this.router.events.pipe(
  //     filter((e: Event): e is RouterEvent => e instanceof RouterEvent)
  //  ).subscribe((e: RouterEvent) => {
  //   const arr_url = e.url.match(/\d+/g);
  //   arr_url ? this.id = Number(arr_url[0]): null
  //   this.menu_visible = this.id ? true:false
  //  });
  }

}
