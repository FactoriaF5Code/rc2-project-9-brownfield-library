package org.leguin.backend.persistence.loans;

import java.util.UUID;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Loans")
public class Loan {
    @Id
    private UUID id;
    private UUID bookId;
    private UUID memberId;
    
    public Loan() {
    }

    public Loan(UUID id, UUID bookId, UUID memberId) {
        this.id = id;
        this.bookId = bookId;
        this.memberId = memberId;
    }
}
