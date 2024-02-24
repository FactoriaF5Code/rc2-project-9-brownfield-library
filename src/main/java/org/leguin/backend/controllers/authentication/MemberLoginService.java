package org.leguin.backend.controllers.authentication;

import java.util.List;

import org.leguin.backend.persistence.members.Member;
import org.leguin.backend.persistence.members.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MemberLoginService {

    private MemberRepository memberRepository;

    public MemberLoginService(@Autowired MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    public boolean authenticate(String email, String password) {
        List<Member> results = memberRepository.findByEmail(email);

        if (results.isEmpty()) {
            return false;
        }

        Member member = results.get(0);

        return member.getPassword().equals(password);
    }

}
