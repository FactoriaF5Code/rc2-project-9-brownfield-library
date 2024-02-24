package org.leguin.backend.controllers.loans;

public class CreateLoanResponse {

    private String msg;

    public CreateLoanResponse(String loanId) {
        this.msg = "Loan " + loanId + " created successfully.";
    }

    public String getMsg() {
        return msg;
    }

    

}
