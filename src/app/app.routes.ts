import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing';
import { WikiComponent } from './wiki/wiki';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'wiki', component: WikiComponent },
  { path: '**', redirectTo: '' }
];
