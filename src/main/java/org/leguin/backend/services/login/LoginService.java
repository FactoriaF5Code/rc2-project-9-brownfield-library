package org.leguin.backend.services.login;

import java.util.Optional;

import java.util.List;
import org.leguin.backend.persistence.members.User;
import org.leguin.backend.persistence.members.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginService {

    private UserRepository userRepository;


    public LoginService(@Autowired UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public Optional<SessionInfo> login(String email, String password) {
        // buscar si el usuario con este mail existe
        List<User> results = userRepository.findByEmail(email);
        if (results.isEmpty()){
            return Optional.empty();
        }
        User member = results.get(0);
        if (!member.getPassword().equals(password)) {
            return Optional.empty();
        }

        return Optional.of(new SessionInfo(member.getFirstName(), member.getLastName()));
    }
    
}
