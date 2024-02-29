package org.leguin.backend.controllers.loans;

public class CreateLoanRequest {
    private String id;
    private String bookId;
    private String memberId;
    private Boolean isAvailable;
    
    public Boolean getIsAvailable() {
        return isAvailable;
    }
    public void setIsAvailable(Boolean isAvailable) {
        this.isAvailable = isAvailable;
    }
    public String getId() {
        return id;
    }
    public String getBookId() {
        return bookId;
    }
    public String getMemberId() {
        return memberId;
    }

    

    

}
