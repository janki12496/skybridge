import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { Flight } from '../../models/flight';
import { addToFavourites, removeFromFavourites } from '../../store/actions/flight.actions';
import { selectFavourites } from '../../store/selectors/flight.selectors';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-flight-card',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    AsyncPipe
  ],
  templateUrl: './flight-card.html',
  styleUrl: './flight-card.css'
})
export class FlightCard {
  @Input() flight!: Flight;
  favourites$: Observable<Flight[]>;

  constructor(private store: Store) {
    this.favourites$ = this.store.select(selectFavourites);
  }

  isFavourite(favourites: Flight[] | null): boolean {
    return favourites?.some(f => f.id === this.flight.id) ?? false;
  }

  toggleFavourite(favourites: Flight[] | null) {
    if (this.isFavourite(favourites)) {
      this.store.dispatch(removeFromFavourites({ flightId: this.flight.id }));
    } else {
      this.store.dispatch(addToFavourites({ flight: this.flight }));
    }
  }

  getStatusColor(): string {
    switch (this.flight.status) {
      case 'ON TIME': return 'primary';
      case 'DELAYED': return 'warn';
      case 'CANCELLED': return 'accent';
      default: return 'primary';
    }
  }
}