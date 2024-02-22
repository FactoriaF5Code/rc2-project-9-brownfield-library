package org.leguin.backend.controllers.members;

import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

import org.leguin.backend.persistence.members.Member;
import org.leguin.backend.persistence.members.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
public class MemberController {

    private MemberRepository repository;

    public MemberController(@Autowired MemberRepository repository) {
        this.repository = repository;
    }

    @PostMapping("/api/members")
    public CreateMemberResponse getMethodName(@RequestBody CreateMemberRequest request) {
        repository.save(new Member(
            UUID.fromString(request.getId()),
            request.getFirstName(),
            request.getLastName(),
            request.getAddress(),
            request.getEmail(),
            request.getPhone()
        ));
        return new CreateMemberResponse(request.getId());
    }

}
