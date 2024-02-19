package org.leguin.backend.integration;

import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.hasSize;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.List;
import java.util.UUID;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.leguin.backend.persistence.Book;
import org.leguin.backend.persistence.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;

@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles("test")
class BookSearchTest {

	@Autowired
	private MockMvc api;

	@Autowired
	private BookRepository bookRepository;

	@BeforeEach
	void setup() {
		bookRepository.deleteAll();
	}

	@Test
	void book_search_by_name() throws Exception {

		bookRepository.saveAll(List.of(
				new Book(UUID.randomUUID(), "La Mano Izquierda de la Oscuridad", "Ursula K. Leguin", "129834751375",
						"1969"),
				new Book(UUID.randomUUID(), "Los desposeídos", "Ursula K. Leguin", "129834751375", "1975")));

		api.perform(get("/api/books?q=Mano"))
				.andExpectAll(
						status().isOk(),
						jsonPath("$.results", hasSize(1)),
						jsonPath("$.results[0].title", equalTo("La Mano Izquierda de la Oscuridad")),
						jsonPath("$.results[0].author", equalTo("Ursula K. Leguin")));
	}

}
