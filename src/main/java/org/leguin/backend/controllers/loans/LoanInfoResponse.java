package org.leguin.backend.controllers.loans;

import java.time.LocalDate;

public class LoanInfoResponse {
    private String member;
    private String returnDate;
    private String bookTitle;

    public String getBookTitle() {
        return bookTitle;
    }

    public LoanInfoResponse(String firstName, String lastName, LocalDate returnDate, String bookTitle) {
        this.member = firstName + " " + lastName;
        this.returnDate = returnDate.toString();
        this.bookTitle = bookTitle;
    }

    public String getReturnDate() {
        return returnDate;
    }

    public String getMember() {
        return member;
    }
}
