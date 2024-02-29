package org.leguin.backend.persistence.loans;

import java.time.LocalDate;
import java.util.UUID;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Loans")
public class Loan {
    @Id
    private UUID id;
    private UUID bookId;    
    private UUID memberId;
    private LocalDate startDate;
    private LocalDate endDate;

    public Loan() {
    }

    public Loan(UUID id, UUID bookId, UUID memberId) {
        this.id = id;
        this.bookId = bookId;
        this.memberId = memberId;
        this.startDate = LocalDate.now();
        this.endDate = startDate.plusDays(30);
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public UUID getBookId() {
        return bookId;
    }

    public void setBookId(UUID bookId) {
        this.bookId = bookId;
    }

    public UUID getMemberId() {
        return memberId;
    }

    public void setMemberId(UUID memberId) {
        this.memberId = memberId;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }

}
