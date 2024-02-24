package org.leguin.backend.controllers.members;

import java.util.List;

import org.leguin.backend.persistence.members.Member;

public class SearchMemberResponse {

    private List<Member> results;

    public SearchMemberResponse(List<Member> results) {
        this.results = results;
    }

    public List<Member> getResults() {
        return results;
    }

}
