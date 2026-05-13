import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Flight } from '../../models/flight';
import { searchFlights, loadFlights } from '../../store/actions/flight.actions';
import { selectAllFlights, selectLoading, selectError } from '../../store/selectors/flight.selectors';
import { FlightListComponent } from '../flight-list/flight-list';

@Component({
  selector: 'app-flight-search',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    AsyncPipe,
    FlightListComponent
  ],
  templateUrl: './flight-search.html',
  styleUrl: './flight-search.css'
})
export class FlightSearch implements OnInit {

  flights$: Observable<Flight[]>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;

  originControl = new FormControl('');
  destinationControl = new FormControl('');

  constructor(private store: Store) {
    this.flights$ = this.store.select(selectAllFlights);
    this.loading$ = this.store.select(selectLoading);
    this.error$ = this.store.select(selectError);
  }

  ngOnInit() {
    this.store.dispatch(loadFlights());
  }

  onSearch() {
    const origin = this.originControl.value || '';
    const destination = this.destinationControl.value || '';
    this.store.dispatch(searchFlights({ origin, destination }));
  }
}