import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Animation, AnimationController, GestureController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit, AfterViewInit {

  @ViewChild('button', { read: ElementRef }) button!: ElementRef<HTMLIonButtonElement>;
  @ViewChild('div', { read: ElementRef }) div!: ElementRef<HTMLDivElement>;
  
  constructor(private animationCtrl: AnimationController,
    private gestureCtrl: GestureController) { }
  
  ngAfterViewInit(): void {
    this.startAnimation();
    this.startGesture();
  }

  ngOnInit() {
  }

  async startAnimation() {
    const animation = this.animationCtrl.create()
      .addElement(this.button.nativeElement)
      .duration(2000)
      .iterations(Infinity)
      .keyframes([
        { offset: 0, transform: 'scale(1)', opacity: '1' },
        { offset: 0.5, transform: 'scale(1.5)', opacity: '0.5' },
        { offset: 1, transform: 'scale(1)', opacity: '1' }
      ]);
    
    animation.play();
  }

  async startGesture() {
    const gesture = this.gestureCtrl.create({
      el: this.div.nativeElement,
      gestureName: 'example',
      onStart: () => {
        this.div.nativeElement.style.transition = 'none';
      },
      onMove: (detail) => {
        const x = detail.currentX - detail.startX;
        const y = detail.currentY - detail.startY;

        this.div.nativeElement.style.transform = `translate(${x}px, ${y}px)`;
      },
      onEnd: () => {
        this.div.nativeElement.style.transform = '';
        this.div.nativeElement.style.transition = '500ms ease-out';
      }
    });

    gesture.enable();
  }
}
