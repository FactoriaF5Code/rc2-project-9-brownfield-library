package org.leguin.backend.persistence.loans;

import java.util.UUID;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LoanRepository extends JpaRepository<Loan, UUID>{
    List<Loan> findByBookId(UUID bookId);
}
