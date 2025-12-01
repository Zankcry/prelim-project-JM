import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Emplist } from './emplist/emplist';
import { Product } from './product/product';
import { Pagenotfound } from './pagenotfound/pagenotfound';

export const routes: Routes = [
  { path: '', component: Home},
  { path: 'about', component: About},
  { path: 'emplist', component: Emplist},
  { path: 'product', component:  Product},
  { path: 'pagenotfound', component: Pagenotfound},
];
