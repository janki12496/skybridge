import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '', 
    loadComponent: () => import('./components/flight-search/flight-search')
      .then(m => m.FlightSearch)
  },
  { 
    path: 'favourites', 
    loadComponent: () => import('./components/favourites/favourites')
      .then(m => m.Favourites)
  },
  { path: '**', redirectTo: '' }
];