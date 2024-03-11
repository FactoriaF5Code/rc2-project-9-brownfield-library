package org.leguin.backend.services.login;

import java.util.Optional;

import java.util.List;
import org.leguin.backend.persistence.members.Member;
import org.leguin.backend.persistence.members.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginService {

    private MemberRepository memberRepository;


    public LoginService(@Autowired MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    public Optional<SessionInfo> login(String email, String password) {
        // buscar si el usuario con este mail existe
        List<Member> results = memberRepository.findByEmail(email);
        if (results.isEmpty()){
            return Optional.empty();
        }
        Member member = results.get(0);
        if (!member.getPassword().equals(password)) {
            return Optional.empty();
        }

        return Optional.of(new SessionInfo(member.getFirstName(), member.getLastName()));
    }
    
}
