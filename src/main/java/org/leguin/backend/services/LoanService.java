package org.leguin.backend.services;

import java.util.Date;
import java.util.List;
import java.util.UUID;

import org.leguin.backend.controllers.loans.LoanInfoResponse;
import org.leguin.backend.persistence.loans.Loan;
import org.leguin.backend.persistence.loans.LoanRepository;
import org.leguin.backend.persistence.members.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoanService {
    @Autowired
    private LoanRepository loanRepository;
    @Autowired
    private MemberRepository memberRepository;

    // public LoanInfoResponse findLoanInfoResponse(UUID bookId, UUID memberId) {
    //     List<Loan> loans = loanRepository.findByBookId(bookId);
    //     Date currentDate = new Date();
    //     // Filtrar los prestamos activos//
    //     Loan activeLoan = null;

    //     for (Loan loan : loans) {
    //         if (loan.getEndDate().isAfter(currentDate)) {
    //             activeLoan = loan;
    //             break;
    //         }
    //     }
    //     if (activeLoan == null) {
    //         return null;
    //     }
    //     Member member = memberRepository.findByMemberId(member);
    //     LoanInfoResponse response = new LoanInfoResponse(member.getFirstName(), member.getLastName(),
    //             activeLoan.getReturnDate());
    //     return response;
    // }

}
