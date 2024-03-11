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
import org.leguin.backend.persistence.members.Member;
import org.leguin.backend.persistence.members.MemberRepository;
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
    private MemberRepository memberRepository;
    private DateService dateService;

    public LoanController(
            @Autowired LoanRepository loanRepository,
            @Autowired BookAvailabilityService bookAvailabilityService,
            @Autowired BookRepository bookRepository,
            @Autowired MemberRepository memberRepository,
            @Autowired DateService dateService) {
        this.loanRepository = loanRepository;
        this.bookAvailabilityService = bookAvailabilityService;
        this.bookRepository = bookRepository;
        this.memberRepository = memberRepository;
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

        Book book = bookRepository.findById(UUID.fromString(request.getBookId())).get();
        if (!book.isAvailable()) {
            return ResponseEntity.badRequest().build();
        }

        bookAvailabilityService.setAsNotAvailable(UUID.fromString(request.getBookId()));

        return ResponseEntity.ok(new CreateLoanResponse(request.getId()));
    }

    @GetMapping
    public ResponseEntity<LoanInfoResponse> getLoanInfoResponse(@RequestParam(name = "bookId") String bookId) {
        Optional<Loan> loanOptional = loanRepository.findByBookId(UUID.fromString(bookId));

        if (loanOptional.isPresent()) {
            Loan loan = loanOptional.get();
            Optional<Member> memberOptional = memberRepository.findById(loan.getMemberId());
            if (memberOptional.isPresent()) {
                Member member = memberOptional.get();
                String bookTitle = bookRepository.findById(UUID.fromString(bookId)).get().getTitle();
                return ResponseEntity.ok(
                        new LoanInfoResponse(
                                member.getFirstName(),
                                member.getLastName(),
                                loan.getEndDate(),
                                bookTitle));
            }
        }
        return ResponseEntity.notFound().build();
    }

    @GetMapping("/search")
    public LoanInfoSearchResponse getLoanInfo(@RequestParam(name = "m", required = true) String memberName) {

        

        List<LoanInfoResponse> results = new ArrayList<>(); 

        List<Member> members = memberRepository.findByFirstNameContaining(memberName);


        // para cada uno de los resultados nos quedamos con el ID
        for (Member member : members) {
            UUID memberId = member.getId();
            var loans = loanRepository.findByMemberId(memberId);
            for (Loan loan : loans) {
                LocalDate endDate = loan.getEndDate();
                String title = bookRepository.findById(loan.getBookId()).get().getTitle();
                var loanInfoResponse = new LoanInfoResponse(member.getFirstName(), member.getLastName(), endDate, title);
                results.add(loanInfoResponse);
            }
        }

        return new LoanInfoSearchResponse(results);
    }
}
