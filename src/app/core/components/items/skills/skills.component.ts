import { Component, Input, OnInit } from '@angular/core';
// import { ModalController } from '@ionic/angular';
// import { FormSkillComponent } from '../../forms/skill/skill.component';
import { FiredbService } from 'src/app/core/services/firedb.service';



@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  @Input() idAdv
  @Input() items = []
  constructor(
    private fire: FiredbService
  ) { }

  ngOnInit() {
    console.log(
       this.idAdv,
       this.items
    )
  }

  async out(el:any){
    
    if(el?.role){
      el.role!= "new" ?
        await this.fire.update(`skills/${el.data.id}`, el.data ).then(()=>{
        location.reload()
      })
        :
      await this.fire.add("skills", el.data).then(el=>{
        location.reload()
      });
    }else{
      await this.fire.deleteById(`skills/${el.id}`).then(()=>{
        location.reload()
      })
    }
  }

  

}
