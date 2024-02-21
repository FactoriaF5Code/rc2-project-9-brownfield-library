package org.leguin.backend.controllers.books;

public class CreateBookResponse {
    private String msg;

    public CreateBookResponse(String id) {
        this.msg = "Book " + id + " saved successfully.";
    }

    public String getMsg() {
        return msg;
    }
}
