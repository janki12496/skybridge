import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { Flight } from '../../models/flight';
import { selectFavourites } from '../../store/selectors/flight.selectors';
import { FlightListComponent } from '../flight-list/flight-list';

@Component({
  selector: 'app-favourites',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    FlightListComponent
  ],
  templateUrl: './favourites.html',
  styleUrl: './favourites.css'
})
export class Favourites  {
  favourites$: Observable<Flight[]>;

  constructor(private store: Store) {
    this.favourites$ = this.store.select(selectFavourites);
  }
}