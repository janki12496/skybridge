import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FlightState } from '../reducers/flight.reducer';

// Get the entire flight state
export const selectFlightState = createFeatureSelector<FlightState>('flights');

// Get all flights
export const selectAllFlights = createSelector(selectFlightState, (state) => state.flights);

// Get favourites
export const selectFavourites = createSelector(selectFlightState, (state) => state.favourites);

// Get loading state
export const selectLoading = createSelector(selectFlightState, (state) => state.loading);

// Get error
export const selectError = createSelector(selectFlightState, (state) => state.error);

// Get only ON TIME flights
export const selectOnTimeFlights = createSelector(selectAllFlights, (flights) =>
  flights.filter((f) => f.status === 'ON TIME'),
);

// Get only DELAYED flights
export const selectDelayedFlights = createSelector(selectAllFlights, (flights) =>
  flights.filter((f) => f.status === 'DELAYED'),
);
