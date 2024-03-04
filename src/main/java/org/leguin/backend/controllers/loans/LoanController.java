package org.leguin.backend.controllers.loans;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.leguin.backend.persistence.BookRepository;
import org.leguin.backend.persistence.loans.Loan;
import org.leguin.backend.persistence.loans.LoanRepository;
import org.leguin.backend.persistence.members.Member;
import org.leguin.backend.persistence.members.MemberRepository;
import org.leguin.backend.services.BookAvailabilityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.leguin.backend.controllers.loans.LoanInfoResponse;

@RestController
@RequestMapping("/api/loans")
public class LoanController {

    private LoanRepository loanRepository;
    private BookRepository bookRepository;
    private BookAvailabilityService bookAvailabilityService;
    private MemberRepository memberRepository;

    public LoanController(
            @Autowired LoanRepository loanRepository,
            @Autowired BookAvailabilityService bookAvailabilityService,
            @Autowired BookRepository bookRepository,
            @Autowired MemberRepository memberRepository) {
        this.loanRepository = loanRepository;
        this.bookAvailabilityService = bookAvailabilityService;
        this.bookRepository = bookRepository;
        this.memberRepository = memberRepository;
    }

    @PostMapping("/")
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

    @GetMapping("/{bookId}")
    public List<Loan> getLoanByBookId(@RequestParam(name = "bookId") UUID bookId) {
        return loanRepository.findByBookId(bookId);
    }

    @GetMapping("/{memberId}")
    public List<Loan> getLoanByMemberId(@RequestParam(name = "memberId") UUID memberId) {
        return loanRepository.findByMemberId(memberId);
    }

    @GetMapping("/{loanId}")
    public ResponseEntity<LoanInfoResponse> getLoanInfoResponse(@RequestParam UUID loanId) {
        Optional<Loan> loanOptional = loanRepository.findById(loanId);
        if (loanOptional.isPresent()) {
            Loan loan = loanOptional.get();
            Optional<Member> memberOptional = memberRepository.findById(loan.getMemberId());
            if (memberOptional.isPresent()) {
                Member member = memberOptional.get();
                return ResponseEntity.ok(
                        new LoanInfoResponse(member.getLastName() + ", " + member.getFirstName(), loan.getEndDate()));
            }
        }
        return ResponseEntity.notFound().build();
    }
    // buscar el préstamo cuyo bookId es bookId usando loanRepository.findByBookID

    // sacar el memberId del préstamo

    // sacar la fecha de final del préstamo

    // sacar el nombre del member usando el memberId

    // construir una respuesta que tenga (memberName ("Pérez, Pepito"), fechaFinal)

}
