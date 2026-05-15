package com.skybridge.backend.repository;

import com.skybridge.backend.model.Flight;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface FlightRepository extends JpaRepository<Flight, Long> {

    // Spring auto implements these just from the method names!
    List<Flight> findByOriginAndDestination(String origin, String destination);

    List<Flight> findByStatus(String status);

    List<Flight> findByOrigin(String origin);
}