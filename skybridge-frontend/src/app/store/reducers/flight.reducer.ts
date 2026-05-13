import { createReducer, on } from '@ngrx/store';
import { Flight } from '../../models/flight';
import {
  loadFlightsSuccess,
  loadFlightsFailure,
  searchFlightsSuccess,
  searchFlightsFailure,
  addToFavourites,
  removeFromFavourites,
} from '../actions/flight.actions';

// Shape of our state
export interface FlightState {
  flights: Flight[];
  favourites: Flight[];
  loading: boolean;
  error: string | null;
}

// Initial state
export const initialState: FlightState = {
  flights: [],
  favourites: [],
  loading: false,
  error: null,
};

export const flightReducer = createReducer(
  initialState,

  // Load flights
  on(loadFlightsSuccess, (state, { flights }) => ({
    ...state,
    flights,
    loading: false,
    error: null,
  })),

  on(loadFlightsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  // Search flights
  on(searchFlightsSuccess, (state, { flights }) => ({
    ...state,
    flights,
    loading: false,
    error: null,
  })),

  on(searchFlightsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  // Favourites
  on(addToFavourites, (state, { flight }) => ({
    ...state,
    favourites: [...state.favourites, flight],
  })),

  on(removeFromFavourites, (state, { flightId }) => ({
    ...state,
    favourites: state.favourites.filter((f) => f.id !== flightId),
  })),
);
