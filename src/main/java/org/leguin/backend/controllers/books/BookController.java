package org.leguin.backend.controllers.books;

import org.springframework.web.bind.annotation.RestController;

import java.util.stream.Collectors;

import org.leguin.backend.persistence.Book;
import org.leguin.backend.services.BookCreationService;
import org.leguin.backend.services.BookSearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import java.util.UUID;

@RestController
@RequestMapping("/api/books")
public class BookController {

    private BookSearchService bookSearch;
    private BookCreationService bookCreation;

    public BookController(
            @Autowired BookSearchService bookSearchService,
            @Autowired BookCreationService bookCreationService) {
        this.bookSearch = bookSearchService;
        this.bookCreation = bookCreationService;
    }

    @GetMapping
    public BookSearchResponse searchBooks(@RequestParam(name = "q", required = true) String query) {
        var bookResults = bookSearch.searchBooks(query)
                .stream()
                .map(this::responseFromBook)
                .collect(Collectors.toList());
        return new BookSearchResponse(bookResults);
    }

    @GetMapping /*("/api/books/available")*/
    public BookSearchResponse availableBooks(@RequestParam(name = "q", required = true) String query) {
        var bookResults = bookSearch.searchBooks(query)
                .stream()
                .filter(book -> book.isAvailable())
                .map(this::responseFromBook)
                .collect(Collectors.toList());
        return new BookSearchResponse(bookResults);
    }
    

    @PostMapping
    public CreateBookResponse createBook(@RequestBody CreateBookRequest request) {

        bookCreation.createBook(
                new Book(UUID.fromString(request.getId()),
                        request.getTitle(),
                        request.getAuthor(),
                        request.getIsbn(),
                        request.getYear(),
                        request.getAvailable()));

        return new CreateBookResponse(request.getId());
    }

    private BookResponse responseFromBook(Book book) {
        return new BookResponse(
                book.getId().toString(),
                book.getIsbn(),
                book.getTitle(),
                book.getAuthor(),
                book.getYear(),
                book.isAvailable());
    }
    
}
