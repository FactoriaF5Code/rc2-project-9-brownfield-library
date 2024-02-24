package org.leguin.backend.services;

import java.util.UUID;

import org.leguin.backend.persistence.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookAvailabilityService {

    private BookRepository repository;

    public BookAvailabilityService(@Autowired BookRepository repository) {
        this.repository = repository;
    }

    public void setAsNotAvailable(UUID bookId) {
        var book = repository.findById(bookId).get();   
        book.setAvailable(false);
        repository.save(book);
    }
}
