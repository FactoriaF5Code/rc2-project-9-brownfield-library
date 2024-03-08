package org.leguin.backend.integration;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.Optional;
import java.util.UUID;

import org.junit.jupiter.api.Test;
import org.leguin.backend.persistence.members.Member;
import org.leguin.backend.persistence.members.MemberRepository;
import org.leguin.backend.persistence.members.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

@ApiTest
public class CreateMemberTest {

    @Autowired
    private MockMvc api;

    @Autowired
    private MemberRepository repository;

    @Test
    public void create_member() throws Exception {
        api.perform(
                post("/api/members")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {
                                    "id": "d3f212d3-149e-4919-98dd-97f8498f53b5",
                                    "firstName": "Severus",
                                    "lastName": "Snape",
                                    "address": "C/ Diagonal 55 2-1",
                                    "email": "snape@hogwarts.edu",
                                    "phone": "+34611111111"
                                }
                                    """))
                .andExpectAll(
                        status().isOk(),
                        jsonPath("$.msg",
                                equalTo("Member d3f212d3-149e-4919-98dd-97f8498f53b5 created successfully.")));

        Optional<Member> member = repository.findById(UUID.fromString("d3f212d3-149e-4919-98dd-97f8498f53b5"));
        assertTrue(member.isPresent());
        assertThat(member.get().getRole(),equalTo(Role.MEMBER));
    }

}
