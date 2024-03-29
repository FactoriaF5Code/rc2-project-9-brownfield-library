package org.leguin.backend.controllers.loans;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.leguin.backend.persistence.Book;
import org.leguin.backend.persistence.BookRepository;
import org.leguin.backend.persistence.loans.Loan;
import org.leguin.backend.persistence.loans.LoanRepository;
import org.leguin.backend.persistence.members.User;
import org.leguin.backend.persistence.members.UserRepository;
import org.leguin.backend.services.BookAvailabilityService;
import org.leguin.backend.services.DateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/loans")
public class LoanController {

    private LoanRepository loanRepository;
    private BookRepository bookRepository;
    private BookAvailabilityService bookAvailabilityService;
    private UserRepository userRepository;
    private DateService dateService;

    public LoanController(
            @Autowired LoanRepository loanRepository,
            @Autowired BookAvailabilityService bookAvailabilityService,
            @Autowired BookRepository bookRepository,
            @Autowired UserRepository userRepository,
            @Autowired DateService dateService) {
        this.loanRepository = loanRepository;
        this.bookAvailabilityService = bookAvailabilityService;
        this.bookRepository = bookRepository;
        this.userRepository = userRepository;
        this.dateService = dateService;
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
                UUID.fromString(request.getMemberId()),
                dateService.currentDate(),
                dateService.currentDate().plusDays(30));
  
    loanRepository.save(loan);


        bookAvailabilityService.setAsNotAvailable(UUID.fromString(request.getBookId()));

        return ResponseEntity.ok(new CreateLoanResponse(request.getId()));
    }


    @GetMapping
    public ResponseEntity<LoanInfoResponse> getLoanInfoResponse(@RequestParam(name = "bookId") String bookId) {
        Optional<Loan> loanOptional = loanRepository.findByBookId(UUID.fromString(bookId));

        if (loanOptional.isPresent()) {
            Loan loan = loanOptional.get();
            Optional<User> memberOptional = userRepository.findById(loan.getMemberId());
            if (memberOptional.isPresent()) {
                User member = memberOptional.get();
                Optional<Book> optionalBook = bookRepository.findById(UUID.fromString(bookId));
                if (optionalBook.isPresent()) {
                    String bookTitle = optionalBook.get().getTitle();

                    return ResponseEntity.ok(
                            new LoanInfoResponse(
                                    member.getFirstName(),
                                    member.getLastName(),
                                    loan.getEndDate(),
                                    bookTitle));
                }
            }
        }
        return ResponseEntity.notFound().build();
    }

    @GetMapping("/search")
    public LoanInfoSearchResponse getLoanInfo(@RequestParam(name = "m", required = true) String memberName) {

        List<LoanInfoResponse> results = new ArrayList<>();

        List<User> members = userRepository.findByFirstNameContaining(memberName);

        // para cada uno de los resultados nos quedamos con el ID
        for (User member : members) {
            UUID memberId = member.getId();
            var loans = loanRepository.findByMemberId(memberId);
            for (Loan loan : loans) {
                LocalDate endDate = loan.getEndDate();
                String title = bookRepository.findById(loan.getBookId()).get().getTitle();
                var loanInfoResponse = new LoanInfoResponse(member.getFirstName(), member.getLastName(), endDate,
                        title);
                results.add(loanInfoResponse);
            }
        }

        return new LoanInfoSearchResponse(results);
    }
}
