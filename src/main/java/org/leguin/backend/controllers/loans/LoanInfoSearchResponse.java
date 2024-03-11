package org.leguin.backend.controllers.loans;

import java.util.List;

public class LoanInfoSearchResponse {
    private List<LoanInfoResponse> results;

    public List<LoanInfoResponse> getResults() {
        return results;
    }

    public LoanInfoSearchResponse(List<LoanInfoResponse> results) {
        this.results = results;
    }

    
    
}
