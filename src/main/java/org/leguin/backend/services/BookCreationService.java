package org.leguin.backend.services;

import org.leguin.backend.persistence.Book;
import org.leguin.backend.persistence.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookCreationService {

    private BookRepository repository;

    public BookCreationService(@Autowired BookRepository repository) {
        this.repository = repository;
    }

    public void createBook(Book book) {
        repository.save(book);
    }
}
