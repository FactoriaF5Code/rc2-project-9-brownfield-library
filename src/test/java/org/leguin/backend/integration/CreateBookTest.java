package org.leguin.backend.integration;

import static org.hamcrest.Matchers.equalTo;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.leguin.backend.persistence.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

@ApiTest
class CreateBookTest {

	@Autowired
	private MockMvc api;

	@Autowired
	private BookRepository bookRepository;

	@BeforeEach
	void setup() {
		bookRepository.deleteAll();
	}

	@Test
	void create_book() throws Exception {

		api.perform(post("/api/books")
				.contentType(MediaType.APPLICATION_JSON)
				.content("""
						{
							"id": "d3f212d3-149e-4919-98dd-97f8498f53b5",
							"title": "La Mano Izquierda de la Oscuridad",
							"author": "Ursula K. Leguin",
							"isbn": "129834751375",
							"year": "1969"
						}
							"""))
				.andExpectAll(
						status().isOk(),
						jsonPath("$.msg",
								equalTo("Book d3f212d3-149e-4919-98dd-97f8498f53b5 saved successfully.")));
	}

}
