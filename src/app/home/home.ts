import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home implements AfterViewInit {
  @ViewChild('heroVideo') heroVideo!: ElementRef<HTMLVideoElement>;
  // Hero text
  title = 'Tech Otakus Save the World';
  description = 'We create immersive virtual world experiences for players around the globe. Explore vast universes, compelling stories, and cutting-edge technology.';

  // Stats section
  stats = [
    { value: '500M+', label: 'Global Downloads' },
    { value: 'Global', label: 'Offices & Operations' },
    { value: 'Multi-Platform', label: 'PC, Console, Mobile, Cloud' }
  ];

  // Featured products summary (small set used by the home grid)
  products = [
    { id: 1, title: 'Genshin Impact', img: 'https://i.ytimg.com/vi/fU6nElrxNRs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCMveCCW1u6sbt06xqjOfa-7UA15Q', description: 'Step into Teyvat, a vast world teeming with life and flowing with elemental energy.' },
    { id: 2, title: 'Honkai: Star Rail', img: 'https://i.ytimg.com/vi/qO09wOQ8xJs/maxresdefault.jpg', description: 'Hop aboard the Astral Express and explore the infinite wonders of the galaxy.' },
    { id: 3, title: 'Zenless Zone Zero', img: 'https://fastcdn.hoyoverse.com/content-v2/plat/160935/284f339052a8e2546e4b33be6da0ea47_747937525091658465.jpeg', description: 'Live dual identities in New Eridu. Take on commissions and explore the Hollows.' },
    { id: 4, title: 'Honkai Impact 3rd', img: 'https://fastcdn.hoyoverse.com/content-v2/bh3/160546/89bbb7479502597b0a25d9d39a3a3109_4351332358891707014.jpg', description: 'A classic action title with a deep narrative.' }
  ];

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
