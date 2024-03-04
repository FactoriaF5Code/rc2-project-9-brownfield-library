package org.leguin.backend.persistence.loans;

import java.time.LocalDate;
import java.util.UUID;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "Loans")
public class Loan {
    @Id
    private UUID id;
    // @ManyToOne
    // @JoinColumn(name = "id_book")
    private UUID bookId;
    // @ManyToOne
    // @JoinColumn(name = "id_member")
    private UUID memberId;
    public UUID getMemberId() {
        return memberId;
    }

    private LocalDate startDate;
    private LocalDate endDate;

    public LocalDate getEndDate() {
        return endDate;
    }

    public Loan() {
    }

    public Loan(UUID id, UUID bookId, UUID memberId) {
        this.id = id;
        this.bookId = bookId;
        this.memberId = memberId;
        this.startDate = LocalDate.now();
        this.endDate = startDate.plusDays(30);
    }

}
