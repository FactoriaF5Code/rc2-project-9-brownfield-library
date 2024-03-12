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
import org.springframework.test.web.servlet.MockMvc;

@ApiTest
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

		api.perform(get("/api/books?q=Mano"))
				.andExpectAll(
						status().isOk(),
						jsonPath("$.results", hasSize(1)),
						jsonPath("$.results[0].id", equalTo("d3f212d3-149e-4919-98dd-97f8498f53b5")),
						jsonPath("$.results[0].title", equalTo("La Mano Izquierda de la Oscuridad")),
						jsonPath("$.results[0].author", equalTo("Ursula K. Leguin")),
						jsonPath("$.results[0].isbn", equalTo("129834751375")),
						jsonPath("$.results[0].year", equalTo("1969")));
	}

}
