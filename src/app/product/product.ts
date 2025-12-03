import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [RouterLink],
  templateUrl: './product.html',
  styleUrls: ['./product.css'],
})
export class Product {
  // Hero
  title = 'Explore Our Universes';
  description = 'From vast open worlds to interstellar journeys and urban fantasies. Discover the game that speaks to your adventure spirit.';

  featuredLabel = 'Featured Products';

  products = [
    { id: 1, title: 'Genshin Impact', img: 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWQwY2VqaGRrNHN1b240eGZtenUyM3dsYWJzNGNmaGdwYjE5YzVmaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/PmwSU5R6R3cSsbQDjT/giphy.gif', description: 'Step into Teyvat, a vast world teeming with life and flowing with elemental energy.', official: 'https://genshin.hoyoverse.com/', download: 'https://genshin.hoyoverse.com/en/download' },
    { id: 2, title: 'Honkai: Star Rail', img: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnFtbHdyNnhpYTVuN3phemNvODl6OHV5NmJvM3F4d2FtcTZjYjR5NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5XsVTCUTr2ulcEdcAg/giphy.gif', description: 'Hop aboard the Astral Express and explore the infinite wonders of the galaxy.', official: 'https://hsr.hoyoverse.com/en-us/', download: 'https://hsr.hoyoverse.com/en-us/' },
    { id: 3, title: 'Zenless Zone Zero', img: 'https://media1.tenor.com/m/wnSuRf4NVkMAAAAC/burnice-other-quiality.gif', description: "Don't go into the Hollows. Welcome to New Eridu.", official: 'https://zenless.hoyoverse.com/', download: 'https://zenless.hoyoverse.com/en-us/main' },
    { id: 4, title: 'Honkai Impact 3rd', img: 'https://media1.tenor.com/m/_KUGJd8iTP8AAAAC/elysia-chibi.gif', description: 'A fast-paced action RPG where players command Valkyries to battle the mysterious Honkai.', official: 'https://honkaiimpact3.hoyoverse.com/global/en-us/home', download: 'https://honkaiimpact3.hoyoverse.com/global/en-us/fab' }
  ];

  // Community entries
  community = [
    { title: 'HoYoLAB', img: 'https://play-lh.googleusercontent.com/azVwh1OazZcsq6ocxOzH4mccFgs3IP0-RTxlFsoIumIO28RbmNx2YP7PEsqNAyY0ck0', description: 'Official community for players to chat, share artwork, and find guides.', url: 'https://www.hoyolab.com/home/events' },
    { title: 'N0va Desktop', img: 'https://pbs.twimg.com/profile_images/1504663440530440192/U8mfsBHr_400x400.jpg', description: 'Immersive live wallpapers featuring Lumi.', url: '#' }
  ];

  imageUrl = 'product.webp';
  trackById(index: number, item: any) { return item.id; }

}

