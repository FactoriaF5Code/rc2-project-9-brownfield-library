package org.leguin.backend.integration;

import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.hasSize;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.leguin.backend.persistence.Book;
import org.leguin.backend.persistence.BookRepository;
import org.leguin.backend.persistence.loans.Loan;
import org.leguin.backend.persistence.loans.LoanRepository;
import org.leguin.backend.persistence.members.Member;
import org.leguin.backend.persistence.members.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.web.servlet.MockMvc;

import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

@ApiTest
public class GetLoansByUserSearchTest {

        @Autowired
        MockMvc api;

        @Autowired
        LoanRepository loanRepository;

        @Autowired
        MemberRepository memberRepository;

        @Autowired
        BookRepository bookRepository;

        @Test
        @DisplayName("cuando le pasamos parte del nombre de un socio nos devuelve los posibles")
        public void test_loan_info_for_user_name() throws Exception {

                memberRepository.saveAll(List.of(
                                new Member(
                                                UUID.fromString("089535e3-01f9-4463-93fa-e66cc67193f5"),
                                                "Paco",
                                                "Pérez",
                                                "loquesea",
                                                "loquesea",
                                                "loquesea",
                                                "loquesea"),
                                new Member(
                                                UUID.fromString("089535e3-01f9-4463-93fa-e66cc67193f4"),
                                                "Paco",
                                                "Lopez",
                                                "loquesea",
                                                "loquesea",
                                                "loquesea",
                                                "loquesea")));

                loanRepository.save(new Loan(
                                UUID.fromString("33b7795b-dcaf-4f96-b68f-54ac27f7072b"),
                                UUID.fromString("d3f212d3-149e-4919-98dd-97f8498f53b5"),
                                UUID.fromString("089535e3-01f9-4463-93fa-e66cc67193f5"),
                                LocalDate.of(2024, 1, 1),
                                LocalDate.of(2024, 1, 31)));

                bookRepository.saveAll(List.of(
                                new Book(UUID.fromString("d3f212d3-149e-4919-98dd-97f8498f53b5"),
                                                "La Mano Izquierda de la Oscuridad",
                                                "Ursula K. Leguin",
                                                "129834751375",
                                                "1969",
                                                true),
                                new Book(UUID.fromString("c4f075c0-868b-4bf0-8fe3-b939a64de604"),
                                                "Los desposeídos",
                                                "Ursula K. Leguin",
                                                "129834751375",
                                                "1975",
                                                true)));

                api.perform(get("/api/loans/search?m=Paco"))
                                .andExpect(status().isOk())
                                .andExpect(jsonPath("$.results", hasSize(1)))
                                .andExpect(jsonPath("$.results[0].member", equalTo("Paco Pérez")))
                                .andExpect(jsonPath("$.results[0].bookTitle", equalTo("La Mano Izquierda de la Oscuridad")))
                                .andExpect(jsonPath("$.results[0].returnDate", equalTo("2024-01-31")));
        }

}
