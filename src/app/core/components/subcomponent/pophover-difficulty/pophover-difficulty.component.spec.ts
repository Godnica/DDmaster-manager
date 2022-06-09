import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PophoverDifficultyComponent } from './pophover-difficulty.component';

describe('PophoverDifficultyComponent', () => {
  let component: PophoverDifficultyComponent;
  let fixture: ComponentFixture<PophoverDifficultyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PophoverDifficultyComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PophoverDifficultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
