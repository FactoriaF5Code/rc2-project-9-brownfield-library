package org.leguin.backend.services;

import java.util.List;

import org.leguin.backend.persistence.Book;
import org.leguin.backend.persistence.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookSearchService {

    private BookRepository repository;

    public BookSearchService(@Autowired BookRepository repository) {
        this.repository = repository;
    }

    public List<Book> searchBooks(String query) {
        return repository.findByTitleContaining(query);
    }

}
