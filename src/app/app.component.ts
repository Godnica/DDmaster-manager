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
    { title: 'Note', url: '/notas/', icon: 'mail' },
    { title: 'Abilità', url: '/skills/', icon: 'ear' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  idAdv
  menu_visible!:boolean;

  

  constructor(
    private router:Router,
  ) {
  }
    
  ngOnInit(){
    this.router.events.pipe(
      filter((e: Event): e is RouterEvent => e instanceof RouterEvent)
   ).subscribe((e: RouterEvent) => {
      this.idAdv = e.url.split("/")[2];
      this.menu_visible = this.idAdv ? true : false
    });
  }

}
