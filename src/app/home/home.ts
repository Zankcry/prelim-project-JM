import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements AfterViewInit {
  @ViewChild('heroVideo') heroVideo!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit(): void {
    try {
      const v = this.heroVideo.nativeElement;
      v.muted = true;
      v.volume = 0;
      // attempt to play muted video to satisfy autoplay policy
      v.play().catch(() => {});
    } catch (e) {
      // ignore if element not found
    }
  }

}
