package org.leguin.backend.controllers.members;

import org.springframework.web.bind.annotation.RestController;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;

import java.util.UUID;

import org.leguin.backend.persistence.members.Member;
import org.leguin.backend.persistence.members.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping("/api/members")
public class MemberController {

    private MemberRepository repository;
    @PersistenceContext
    private EntityManager entityManager;

    public MemberController(@Autowired MemberRepository repository) {
        this.repository = repository;
    }

    @PostMapping
    public CreateMemberResponse createMember(@RequestBody CreateMemberRequest request) {
        repository.save(new Member(
                UUID.fromString(request.getId()),
                request.getFirstName(),
                request.getLastName(),
                request.getAddress(),
                request.getEmail(),
                request.getPhone()));
        return new CreateMemberResponse(request.getId());
    }

    @GetMapping
    public SearchMemberResponse searchMembers(@RequestParam(name = "q", required = true) String q) {

        String query = "SELECT m FROM Member m WHERE m.lastName LIKE '" + q + "'";
        var results = entityManager.createQuery(query, Member.class).getResultList();

        return new SearchMemberResponse(results);
    }

}
