import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Animation, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit, AfterViewInit {

  @ViewChild('button', { read: ElementRef }) button!: ElementRef<HTMLIonButtonElement>;
  private animation!: Animation;

  constructor(private animationCtrl: AnimationController) { }
  
  ngAfterViewInit(): void {
    this.animation = this.animationCtrl.create()
      .addElement(this.button.nativeElement)
      .duration(2000)
      .iterations(Infinity)
      .delay(1000)
      .keyframes([
        { offset: 0, transform: 'scale(1)', opacity: '1' },
        { offset: 0.5, transform: 'scale(1.5)', opacity: '0.5' },
        { offset: 1, transform: 'scale(1)', opacity: '1' }
      ]);
    
    this.animation.play();
  }

  ngOnInit() {
  }

}
