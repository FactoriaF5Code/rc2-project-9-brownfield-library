package org.leguin.backend.services;

import java.util.List;

import org.leguin.backend.persistence.members.Member;
import org.leguin.backend.persistence.members.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailService implements UserDetailsService {

    @Autowired
    private MemberRepository repository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        List <Member> results = repository.findByEmail(username);
        if (results.isEmpty()) {
            throw new UsernameNotFoundException(username);
        }
        Member member = results.get(0);

        return new CustomUserDetails(member);

    }

}
