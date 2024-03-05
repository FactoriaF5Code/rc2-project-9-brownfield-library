package org.leguin.backend.controllers.loans;

import java.time.LocalDate;

public class LoanInfoResponse {
    private String member;
    private String returnDate;

    public LoanInfoResponse(String firstName, String lastName, LocalDate returnDate) {
        this.member = firstName + " " + lastName;
        this.returnDate = returnDate.toString();
    }

    public String getReturnDate() {
        return returnDate;
    }

    public String getMember() {
        return member;
    }
}
