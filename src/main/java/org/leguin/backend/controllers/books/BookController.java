package org.leguin.backend.controllers.books;

import org.springframework.web.bind.annotation.RestController;

import java.util.stream.Collectors;

import org.leguin.backend.services.BookSearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
public class BookController {

    private BookSearchService bookSearch;

    public BookController(@Autowired BookSearchService bookSearchService) {
        this.bookSearch = bookSearchService;
    }

    @GetMapping("/api/books")
    public BookSearchResponse searchBooks(@RequestParam(name = "q", required = true) String query) {
        var bookResults = bookSearch.searchBooks(query).stream()
                .map(book -> new BookResponse(
                    book.getId().toString(),   
                    book.getIsbn(),
                    book.getTitle(), 
                    book.getAuthor(),
                    book.getYear(),
                    book.isAvailable()
                ))
                .collect(Collectors.toList());
        return new BookSearchResponse(bookResults);
    }

}
