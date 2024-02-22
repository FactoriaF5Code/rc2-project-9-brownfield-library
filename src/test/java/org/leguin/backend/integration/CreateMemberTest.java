package org.leguin.backend.integration;

import static org.hamcrest.Matchers.equalTo;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

@ApiTest
public class CreateMemberTest {

    @Autowired
    private MockMvc api;

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
    }

}
