package org.leguin.backend.controllers.members;

import java.util.List;

import org.leguin.backend.persistence.members.User;

public class SearchMemberResponse {

    private List<User> results;

    public SearchMemberResponse(List<User> results) {
        this.results = results;
    }

    public List<User> getResults() {
        return results;
    }

}
