package com.skybridge.backend.service;

import com.skybridge.backend.model.Flight;
import java.util.List;

public interface FlightService {

    List<Flight> getAllFlights();

    List<Flight> searchFlights(String origin, String destination);

    List<Flight> getFlightsByStatus(String status);

    Flight getFlightById(Long id);

    Flight saveFlight(Flight flight);

    void deleteFlight(Long id);
}