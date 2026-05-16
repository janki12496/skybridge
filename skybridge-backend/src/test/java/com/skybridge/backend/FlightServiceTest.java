package com.skybridge.backend;

import com.skybridge.backend.model.Flight;
import com.skybridge.backend.repository.FlightRepository;
import com.skybridge.backend.service.impl.FlightServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class FlightServiceTest {

    @Mock
    private FlightRepository flightRepository;

    @InjectMocks
    private FlightServiceImpl flightService;

    private Flight flight1;
    private Flight flight2;

    @BeforeEach
    void setUp() {
        flight1 = new Flight(1L, "AC101", "Toronto", "Vancouver", "08:00", "11:00", "ON TIME", 299.99);
        flight2 = new Flight(2L, "AC202", "Toronto", "Montreal", "09:00", "10:15", "ON TIME", 149.99);
    }

    @Test
    void getAllFlights_ShouldReturnAllFlights() {
        when(flightRepository.findAll()).thenReturn(Arrays.asList(flight1, flight2));

        List<Flight> flights = flightService.getAllFlights();

        assertEquals(2, flights.size());
        verify(flightRepository, times(1)).findAll();
    }

    @Test
    void getFlightById_ShouldReturnFlight_WhenExists() {
        when(flightRepository.findById(1L)).thenReturn(Optional.of(flight1));

        Flight flight = flightService.getFlightById(1L);

        assertNotNull(flight);
        assertEquals("AC101", flight.getFlightNumber());
        verify(flightRepository, times(1)).findById(1L);
    }

    @Test
    void getFlightById_ShouldThrowException_WhenNotFound() {
        when(flightRepository.findById(99L)).thenReturn(Optional.empty());

        assertThrows(RuntimeException.class, () -> flightService.getFlightById(99L));
        verify(flightRepository, times(1)).findById(99L);
    }

    @Test
    void searchFlights_ShouldReturnMatchingFlights() {
        when(flightRepository.findByOriginAndDestination("Toronto", "Vancouver"))
                .thenReturn(Arrays.asList(flight1));

        List<Flight> flights = flightService.searchFlights("Toronto", "Vancouver");

        assertEquals(1, flights.size());
        assertEquals("AC101", flights.get(0).getFlightNumber());
        verify(flightRepository, times(1)).findByOriginAndDestination("Toronto", "Vancouver");
    }

    @Test
    void saveFlight_ShouldReturnSavedFlight() {
        when(flightRepository.save(flight1)).thenReturn(flight1);

        Flight saved = flightService.saveFlight(flight1);

        assertNotNull(saved);
        assertEquals("AC101", saved.getFlightNumber());
        verify(flightRepository, times(1)).save(flight1);
    }

    @Test
    void deleteFlight_ShouldCallRepository() {
        doNothing().when(flightRepository).deleteById(1L);

        flightService.deleteFlight(1L);

        verify(flightRepository, times(1)).deleteById(1L);
    }

    @Test
    void getFlightsByStatus_ShouldReturnFlightsByStatus() {
        when(flightRepository.findByStatus("ON TIME"))
                .thenReturn(Arrays.asList(flight1, flight2));

        List<Flight> flights = flightService.getFlightsByStatus("ON TIME");

        assertEquals(2, flights.size());
        verify(flightRepository, times(1)).findByStatus("ON TIME");
    }
}