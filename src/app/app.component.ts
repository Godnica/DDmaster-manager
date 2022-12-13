import { Component } from '@angular/core';
import { Event, RouterEvent, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ControllerService } from './core/services/controller.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Note', url: '/notas/', icon: 'mail' },
    { title: 'Abilità', url: '/skills/', icon: 'ear' },
    { title: 'Incontri', url: '/fights/', icon: 'skull' }
    // { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    // { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    // { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    // { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = [
    // { title: 'Calendario', url: '//', icon: 'calendar' },
    { title: 'Controlli', url: '/badges/', icon: 'cog' },
    { title: 'Gruppo', url: '/pg/', icon: 'people' },
    { title: 'Tesoro', url: '/treasure/', icon: 'diamond'}
  ];
  idAdv
  menu_visible!:boolean;

  

  constructor(
    private router:Router,
    private readonly controller: ControllerService
  ) {
  }
    
  ngOnInit(){

    this.router.events.pipe(
      filter((e: Event): e is RouterEvent => e instanceof RouterEvent)
   ).subscribe((e: RouterEvent) => {
      this.idAdv = e.url.split("/")[2];
      this.menu_visible = this.idAdv ? true : false
      if(this.idAdv){
        this.controller.idAdv = this.idAdv;
      }
    });
  }

  goHome(){
    this.router.navigate(["adventures"])
  }

}
