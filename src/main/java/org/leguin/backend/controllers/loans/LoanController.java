package org.leguin.backend.controllers.loans;

import java.util.UUID;

import org.leguin.backend.persistence.loans.Loan;
import org.leguin.backend.persistence.loans.LoanRepository;
import org.leguin.backend.services.BookAvailabilityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/loans")
public class LoanController {

    private LoanRepository loanRepository;
    private BookAvailabilityService bookAvailabilityService;
    

    public LoanController(@Autowired LoanRepository loanRepository,
            @Autowired BookAvailabilityService bookAvailabilityService) {
        this.loanRepository = loanRepository;
        this.bookAvailabilityService = bookAvailabilityService;
    }

    @PostMapping
    public CreateLoanResponse createLoan(@RequestBody CreateLoanRequest request) {
        Loan loan = new Loan(
                UUID.fromString(request.getId()),
                UUID.fromString(request.getBookId()),
                UUID.fromString(request.getMemberId()));

        loanRepository.save(loan);

        bookAvailabilityService.setAsNotAvailable(UUID.fromString(request.getBookId()));

        return new CreateLoanResponse(request.getId());
    }

    // hay que crear un get mapping para /api/loans?memberId=9128475136

}
