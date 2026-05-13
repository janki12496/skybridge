import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideZoneChangeDetection } from '@angular/core';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { flightReducer } from './store/reducers/flight.reducer';
import { loadFlightsEffect, searchFlightsEffect } from './store/effects/flight.effects';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideStore({ flights: flightReducer }),
   provideEffects({ loadFlightsEffect, searchFlightsEffect }),
    provideStoreDevtools({ maxAge: 25 }),
  ],
};
