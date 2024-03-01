package org.leguin.backend.services;

import java.util.List;
import java.util.UUID;

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

    public List<Loan> findByBookId(UUID book) {
        return loanRepository.findByBookId(book);
    }

}
