package org.leguin.backend.integration;

import java.util.UUID;

import static org.hamcrest.Matchers.equalTo;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.leguin.backend.persistence.Book;
import org.leguin.backend.persistence.BookRepository;
import org.leguin.backend.persistence.members.Member;
import org.leguin.backend.persistence.members.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

@ApiTest
public class CreateLoanTest {

        @Autowired
        private MockMvc api;

        @Autowired
        private MemberRepository memberRepository;

        @Autowired
        private BookRepository bookRepository;

        @Test
        @DisplayName("create a loan")
        public void createLoan() throws Exception {

                memberRepository.save(
                                new Member(
                                                UUID.fromString("a0ecb47e-9e0b-4c86-8d69-9a2f46146b15"),
                                                "Juan",
                                                "Pérez",
                                                "123 Calle Principal, Ciudad",
                                                "juan.perez@email.com",
                                                "1234567890",
                                                "password"));

                bookRepository.save(
                                new Book(UUID.fromString("c4a4e597-9aee-4b1e-92de-41d33224c6a1"),
                                                "The Left Hand of Darkness",
                                                "Ursula K. Le Guin",
                                                "9780441478125",
                                                "1969",
                                                true));

                api.perform(post("/api/loans")
                                .contentType(MediaType.APPLICATION_JSON)
                                .content("""
                                                {
                                                    "id": "031ce36a-08a7-4cab-a8a8-30b48c28e979",
                                                    "bookId": "c4a4e597-9aee-4b1e-92de-41d33224c6a1",
                                                    "memberId": "a0ecb47e-9e0b-4c86-8d69-9a2f46146b15"
                                                }
                                                """))
                                .andExpect(status().isOk())
                                .andExpect(jsonPath("$.msg",
                                                equalTo("Loan 031ce36a-08a7-4cab-a8a8-30b48c28e979 created successfully.")));
        }

        @Test
        @DisplayName("Cant create a new loan if books do not exist")
        public void notCreateLoan() throws Exception {

                memberRepository.save(
                                new Member(
                                                UUID.fromString("a0ecb47e-9e0b-4c86-8d69-9a2f46146b15"),
                                                "Juan",
                                                "Pérez",
                                                "123 Calle Principal, Ciudad",
                                                "juan.perez@email.com",
                                                "1234567890",
                                                "password"));

                bookRepository.save(
                                new Book(UUID.fromString("c4a4e597-9aee-4b1e-92de-41d33224c6a1"),
                                                "The Left Hand of Darkness",
                                                "Ursula K. Le Guin",
                                                "9780441478125",
                                                "1969",
                                                true));

                api.perform(post("/api/loans")
                                .contentType(MediaType.APPLICATION_JSON)
                                .content("""
                                                {
                                                    "id": "031ce36a-08a7-4cab-a8a8-30b48c28e979",
                                                    "bookId": "df11a78c-fb09-4522-ba42-c3ec7d5721ae",
                                                    "memberId": "a0ecb47e-9e0b-4c86-8d69-9a2f46146b15"
                                                }
                                                """))
                                .andExpect(status().isBadRequest());
                                
        }

}
