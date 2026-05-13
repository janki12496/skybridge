import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FlightService } from '../../services/flight.service';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import {
  loadFlights,
  loadFlightsSuccess,
  loadFlightsFailure,
  searchFlights,
  searchFlightsSuccess,
  searchFlightsFailure
} from '../actions/flight.actions';

export const loadFlightsEffect = createEffect(
  (actions$ = inject(Actions), flightService = inject(FlightService)) => {
    return actions$.pipe(
      ofType(loadFlights),
      mergeMap(() =>
        flightService.getAllFlights().pipe(
          map(flights => loadFlightsSuccess({ flights })),
          catchError(error => of(loadFlightsFailure({ error: error.message })))
        )
      )
    );
  },
  { functional: true }
);

export const searchFlightsEffect = createEffect(
  (actions$ = inject(Actions), flightService = inject(FlightService)) => {
    return actions$.pipe(
      ofType(searchFlights),
      mergeMap(({ origin, destination }) =>
        flightService.searchFlights(origin, destination).pipe(
          map(flights => searchFlightsSuccess({ flights })),
          catchError(error => of(searchFlightsFailure({ error: error.message })))
        )
      )
    );
  },
  { functional: true }
);