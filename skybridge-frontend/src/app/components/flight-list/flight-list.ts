import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Flight } from '../../models/flight';
import { FlightCard } from '../flight-card/flight-card';

@Component({
  selector: 'app-flight-list',
  standalone: true,
  imports: [
    CommonModule,
    FlightCard
  ],
  templateUrl: './flight-list.html',
  styleUrl: './flight-list.css'
})
export class FlightListComponent {
  @Input() flights: Flight[] | null = [];
}