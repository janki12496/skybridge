package com.skybridge.backend.controller;

import com.skybridge.backend.model.Flight;
import com.skybridge.backend.service.FlightService;
import lombok.RequiredArgsConstructor;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;
import java.util.List;

@Controller
@RequiredArgsConstructor
public class FlightGraphQLController {

    private final FlightService flightService;

    @QueryMapping
    public List<Flight> flights() {
        return flightService.getAllFlights();
    }

    @QueryMapping
    public Flight flightById(@Argument Long id) {
        return flightService.getFlightById(id);
    }

    @QueryMapping
    public List<Flight> flightsByStatus(@Argument String status) {
        return flightService.getFlightsByStatus(status);
    }

    @QueryMapping
    public List<Flight> searchFlights(@Argument String origin, @Argument String destination) {
        return flightService.searchFlights(origin, destination);
    }
}