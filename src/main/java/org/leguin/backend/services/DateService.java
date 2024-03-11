package org.leguin.backend.services;

import java.time.LocalDate;

import org.springframework.stereotype.Service;

@Service
public class DateService {
    public LocalDate currentDate() {
        return LocalDate.now();
    }
  
}
