package org.leguin.backend.services;

import java.util.List;

import org.leguin.backend.persistence.members.User;
import org.leguin.backend.persistence.members.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailService implements UserDetailsService {

    @Autowired
    private UserRepository repository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        List <User> results = repository.findByEmail(username);
        if (results.isEmpty()) {
            throw new UsernameNotFoundException(username);
        }
        User member = results.get(0);

        return new CustomUserDetails(member);

    }

}
