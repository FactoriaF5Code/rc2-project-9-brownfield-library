package org.leguin.backend.integration;

import static org.hamcrest.Matchers.equalTo;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.leguin.backend.persistence.Book;
import org.leguin.backend.persistence.BookRepository;
import org.leguin.backend.persistence.loans.Loan;
import org.leguin.backend.persistence.loans.LoanRepository;
import org.leguin.backend.persistence.members.User;
import org.leguin.backend.persistence.members.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.web.servlet.MockMvc;

import java.time.LocalDate;
import java.util.UUID;

@ApiTest
public class GetLoanInfoByBookIdTest {

        @Autowired
        MockMvc api;

        @Autowired
        LoanRepository loanRepository;

        @Autowired
        UserRepository memberRepository;

        @Autowired
        BookRepository bookRepository;

        @Test
        @DisplayName("cuando le pasamos el id de un libro, nos devuelve el nombre de la persona que lo tiene y hasta cuándo")
        public void test_loanInfo_from_bookId() throws Exception {
                bookRepository.save(new Book(UUID.fromString("98e2af83-1a6b-4fce-8579-fbcfeb09c562"),
                                "La Mano Izquierda de la Oscuridad",
                                "Ursula K. Leguin",
                                "129834751375",
                                "1969",
                                true));

                memberRepository.save(
                                new User(
                                                UUID.fromString("089535e3-01f9-4463-93fa-e66cc67193f5"),
                                                "Pepito",
                                                "Pérez",
                                                "loquesea",
                                                "loquesea",
                                                "loquesea",
                                                "loquesea"));

                loanRepository.save(new Loan(
                                UUID.fromString("33b7795b-dcaf-4f96-b68f-54ac27f7072b"),
                                UUID.fromString("98e2af83-1a6b-4fce-8579-fbcfeb09c562"),
                                UUID.fromString("089535e3-01f9-4463-93fa-e66cc67193f5"),
                                LocalDate.of(2024, 1, 1),
                                LocalDate.of(2024, 1, 31)));

                api.perform(get("/api/loans?bookId=98e2af83-1a6b-4fce-8579-fbcfeb09c562"))
                                .andExpect(status().isOk())
                                .andExpect(jsonPath("$.member", equalTo("Pepito Pérez")))
                                .andExpect(jsonPath("$.returnDate", equalTo("2024-01-31")));
        }

}
