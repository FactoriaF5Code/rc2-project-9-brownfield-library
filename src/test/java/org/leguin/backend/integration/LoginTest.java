package org.leguin.backend.integration;

import org.junit.jupiter.api.Test;
import org.leguin.backend.persistence.members.User;
import org.leguin.backend.persistence.members.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.hamcrest.Matchers.equalTo;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.UUID;

@SpringBootTest
@AutoConfigureMockMvc
public class LoginTest {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private MockMvc api;

    @Test
    public void loginTest() throws Exception {

        // given
        userRepository.save(
                new User(
                        UUID.fromString("36d4688d-536c-41de-a330-6dfc2ae56645"),
                        "Elena",
                        "Moreno",
                        "Calle de las huertas",
                        "elena@email.com",
                        "612345678",
                        "pass4elena"));

        // when
        api.perform(post("/auth/login")
                .contentType(MediaType.APPLICATION_JSON)
                .content("""
                        {
                        	"user": "elena@email.com",
                        	"password": "pass4elena"
                        }
                        """))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.session.userName",equalTo("Elena Moreno")));

    }

}
