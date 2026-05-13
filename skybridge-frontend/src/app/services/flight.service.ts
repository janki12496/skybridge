import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Flight } from '../models/flight';

@Injectable({
  providedIn: 'root',
})
export class FlightService {
  private apiUrl = 'http://localhost:8080/api/flights';

  constructor(private http: HttpClient) {}

  getAllFlights(): Observable<Flight[]> {
    return this.http.get<Flight[]>(this.apiUrl);
  }

  searchFlights(origin: string, destination: string): Observable<Flight[]> {
    const params = new HttpParams().set('origin', origin).set('destination', destination);
    return this.http.get<Flight[]>(`${this.apiUrl}/search`, { params });
  }

  getFlightsByStatus(status: string): Observable<Flight[]> {
    return this.http.get<Flight[]>(`${this.apiUrl}/status/${status}`);
  }

  getLiveFlightUpdates(): Observable<Flight[]> {
    return interval(30000).pipe(switchMap(() => this.getAllFlights()));
  }
}
