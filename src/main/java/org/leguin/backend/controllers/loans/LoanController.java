package org.leguin.backend.controllers.loans;

import java.util.UUID;

import org.leguin.backend.persistence.loans.Loan;
import org.leguin.backend.persistence.loans.LoanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/loans")
public class LoanController {

    private LoanRepository loanRepository;

    public LoanController(@Autowired LoanRepository loanRepository) {
        this.loanRepository = loanRepository;
    }

    @PostMapping
    public CreateLoanResponse createLoan(@RequestBody CreateLoanRequest request) {
        Loan loan = new Loan(
                UUID.fromString(request.getId()),
                UUID.fromString(request.getBookId()),
                UUID.fromString(request.getMemberId()));

        loanRepository.save(loan);

        return new CreateLoanResponse(request.getId());
    }

}
