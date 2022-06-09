import { Component, OnInit } from '@angular/core';
import { skillDifficulty } from 'src/app/core/models/skill.model';
import { PopoverController } from '@ionic/angular';
@Component({
  selector: 'app-pophover-difficulty',
  templateUrl: './pophover-difficulty.component.html',
  styleUrls: ['./pophover-difficulty.component.scss'],
})
export class PophoverDifficultyComponent implements OnInit {

  difficulty = skillDifficulty;
  darr = Object.entries(this.difficulty)
  constructor(
    private popoverCtrl: PopoverController
  ) { }


  ngOnInit() {
    console.log(this.darr)
  }

  dismiss(item){
    this.popoverCtrl.dismiss(item);
  }

}
