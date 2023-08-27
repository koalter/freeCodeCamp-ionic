import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { register } from 'swiper/element/bundle';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent  implements AfterViewInit {

  @ViewChild('swiper') swiperRef: ElementRef | undefined;
  @Output() onFinish = new EventEmitter();

  constructor() { }

  ngAfterViewInit(): void {
    register();
  }

  next() {
    this.swiperRef?.nativeElement.swiper.slideNext();
  }

  finish() {
    this.onFinish.emit();
  }
}
