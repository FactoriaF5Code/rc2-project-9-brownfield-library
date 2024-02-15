package org.leguin.backend.controllers.books;

import java.util.List;

public class BookSearchResponse {

    private List<BookResponse> results;

    public BookSearchResponse(List<BookResponse> results) {
        this.results = results;

    }

    public List<BookResponse> getResults() {
        return results;
    }
}
