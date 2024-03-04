package org.leguin.backend.controllers.loans;

import java.time.LocalDate;

public class LoanInfoResponse {
    private String memberFirstName;
    private String memberLastName;
    private LocalDate endDate;

    public LoanInfoResponse(String memberFirstName, String memberLastName, LocalDate endDate) {
        this.memberFirstName = memberFirstName;
        this.memberLastName = memberLastName;
        this.endDate = endDate;
    }

    public String getMemberFirstName() {
        return memberFirstName;
    }

    public void setMemberFirstName(String memberFirstName) {
        this.memberFirstName = memberFirstName;
    }

    public String getMemberLastName() {
        return memberLastName;
    }

    public void setMemberLastName(String memberLastName) {
        this.memberLastName = memberLastName;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }
}
