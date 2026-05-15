package com.skybridge.backend;

import com.skybridge.backend.model.Flight;
import com.skybridge.backend.repository.FlightRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class DataLoader implements CommandLineRunner {

    private final FlightRepository flightRepository;

    @Override
    public void run(String... args) {
        flightRepository.save(new Flight(null, "AC101", "Toronto", "Vancouver", "08:00", "11:00", "ON TIME", 299.99));
        flightRepository.save(new Flight(null, "AC202", "Toronto", "Montreal", "09:00", "10:15", "ON TIME", 149.99));
        flightRepository.save(new Flight(null, "AC303", "Vancouver", "Calgary", "10:00", "11:30", "DELAYED", 199.99));
        flightRepository.save(new Flight(null, "AC404", "Montreal", "Ottawa", "11:00", "11:45", "ON TIME", 99.99));
        flightRepository.save(new Flight(null, "AC505", "Calgary", "Toronto", "12:00", "16:00", "CANCELLED", 249.99));
    }
}