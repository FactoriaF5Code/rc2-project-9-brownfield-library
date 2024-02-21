package org.leguin.backend.controllers.books;

public class BookResponse {

    private String id;
    private String isbn;
    private String title;
    private String author;
    private String year;

    private Boolean available;

    public BookResponse(String id, String isbn, String title, String author, String year, Boolean available) {
        this.id = id;
        this.isbn = isbn;
        this.title = title;
        this.author = author;
        this.year = year;
        this.available = available;
    }

    public String getId() {
        return id;
    }

    public String getIsbn() {
        return isbn;
    }

    public String getTitle() {
        return title;
    }

    public String getAuthor() {
        return author;
    }

    public Boolean getAvailable() {
        return available;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }
}
