package org.leguin.backend.controllers.loans;

import java.util.Optional;
import java.util.UUID;

import org.leguin.backend.persistence.BookRepository;
import org.leguin.backend.persistence.loans.Loan;
import org.leguin.backend.persistence.loans.LoanRepository;
import org.leguin.backend.services.BookAvailabilityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/loans")
public class LoanController {

    private LoanRepository loanRepository;
    private BookRepository bookRepository;
    private BookAvailabilityService bookAvailabilityService;

    public LoanController(@Autowired LoanRepository loanRepository,
            @Autowired BookAvailabilityService bookAvailabilityService,
            @Autowired BookRepository bookRepository) {
        this.loanRepository = loanRepository;
        this.bookAvailabilityService = bookAvailabilityService;
        this.bookRepository = bookRepository;
    }

    @PostMapping
    public ResponseEntity<CreateLoanResponse> createLoan(@RequestBody CreateLoanRequest request) {
        if (!bookRepository.existsById(UUID.fromString(request.getBookId()))) {
            return ResponseEntity.badRequest()
                    .build();
        }

        Loan loan = new Loan(
                UUID.fromString(request.getId()),
                UUID.fromString(request.getBookId()),
                UUID.fromString(request.getMemberId()));

        loanRepository.save(loan);

        bookAvailabilityService.setAsNotAvailable(UUID.fromString(request.getBookId()));

        return ResponseEntity.ok(new CreateLoanResponse(request.getId()));
    }

    @GetMapping("/api/loans?bookId={id}")
    public ResponseEntity<CreateLoanResponse> getMemberById(@PathVariable Integer id) {
        Optional<Loan> loan = repository.findById(id);
        if (loan.isPresent()) {
            Loan existingMember = loan.get();
            CreateLoanResponse membersResponse = new CreateLoanResponse(existingLoan.getIdLoan(),
                    existingLoan.getName(), existingLoan.getLastName(),
                    existingLoan.getReturnDate());
            return ResponseEntity.ok(loanResponse);
        } else {
            return ResponseEntity.notFound().build();
        }

}
