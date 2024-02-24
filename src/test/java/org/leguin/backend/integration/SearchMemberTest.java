package org.leguin.backend.integration;

import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.hasSize;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.List;
import java.util.UUID;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.leguin.backend.persistence.members.Member;
import org.leguin.backend.persistence.members.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.web.servlet.MockMvc;

@ApiTest
public class SearchMemberTest {

    @Autowired
    private MockMvc api;

    @Autowired
    private MemberRepository repository;

    @Test
    @DisplayName("Allows to search for members by name")
    public void memberSearchTest() throws Exception {

        repository.saveAll(List.of(
                new Member(UUID.fromString("a0ecb47e-9e0b-4c86-8d69-9a2f46146b15"),
                        "Juan",
                        "López",
                        "123 Calle Principal, Ciudad",
                        "juan.perez@email.com",
                        "1234567890",
                        "password"),
                new Member(UUID.fromString("7d342190-146b-4eb4-a0a3-f694b026ae08"),
                        "Jose",
                        "Pérez",
                        "123 Calle Principal, Ciudad",
                        "jose.perez@email.com",
                        "1234567890",
                        "password")));

        api.perform(get("/api/members?q=López"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.results[*]", hasSize(1)))
                .andExpect(jsonPath("$.results[0].firstName", equalTo("Juan")));

    }

}
