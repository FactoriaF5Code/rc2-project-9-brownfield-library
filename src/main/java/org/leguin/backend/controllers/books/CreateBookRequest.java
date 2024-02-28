package org.leguin.backend.controllers.books;

public class CreateBookRequest {
    private String id;
    private String title;
    private String author;
    private String isbn;
    private String year;
    private String genre;
    private Boolean available;
    
    public String getId() {
        return id;
    }
    public String getTitle() {
        return title;
    }
    public String getAuthor() {
        return author;
    }
    public String getIsbn() {
        return isbn;
    }
    public String getYear() {
        return year;
    }
    public Boolean getAvailable() {
        return available;
    }
    public String getGenre() {
        return genre;
    }

    

}
