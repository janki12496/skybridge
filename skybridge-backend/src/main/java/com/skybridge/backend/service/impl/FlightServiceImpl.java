package com.skybridge.backend.service.impl;

import com.skybridge.backend.model.Flight;
import com.skybridge.backend.repository.FlightRepository;
import com.skybridge.backend.service.FlightService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class FlightServiceImpl implements FlightService {

    private final FlightRepository flightRepository;

    @Override
    public List<Flight> getAllFlights() {
        return flightRepository.findAll();
    }

    @Override
    public List<Flight> searchFlights(String origin, String destination) {
        return flightRepository.findByOriginAndDestination(origin, destination);
    }

    @Override
    public List<Flight> getFlightsByStatus(String status) {
        return flightRepository.findByStatus(status);
    }

    @Override
    public Flight getFlightById(Long id) {
        return flightRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Flight not found with id: " + id));
    }

    @Override
    public Flight saveFlight(Flight flight) {
        return flightRepository.save(flight);
    }

    @Override
    public void deleteFlight(Long id) {
        flightRepository.deleteById(id);
    }
}