package org.leguin.backend.unit;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;

import org.junit.jupiter.api.Test;
import org.leguin.backend.controllers.books.CreateBookResponse;

public class CreateBookResponseTest {
    
    @Test
    public void generates_response_when_creating_a_book() {
        CreateBookResponse r = new CreateBookResponse("SOME_ID");

        assertThat(r.getMsg(), equalTo("Book SOME_ID saved successfully."));
    }
}
