import { createAction, props } from '@ngrx/store';
import { Flight } from '../../models/flight';

// Load all flights
export const loadFlights = createAction('[Flight] Load Flights');

export const loadFlightsSuccess = createAction(
  '[Flight] Load Flights Success',
  props<{ flights: Flight[] }>(),
);

export const loadFlightsFailure = createAction(
  '[Flight] Load Flights Failure',
  props<{ error: string }>(),
);

// Search flights
export const searchFlights = createAction(
  '[Flight] Search Flights',
  props<{ origin: string; destination: string }>(),
);

export const searchFlightsSuccess = createAction(
  '[Flight] Search Flights Success',
  props<{ flights: Flight[] }>(),
);

export const searchFlightsFailure = createAction(
  '[Flight] Search Flights Failure',
  props<{ error: string }>(),
);

// Favourites
export const addToFavourites = createAction(
  '[Flight] Add To Favourites',
  props<{ flight: Flight }>(),
);

export const removeFromFavourites = createAction(
  '[Flight] Remove From Favourites',
  props<{ flightId: number }>(),
);
