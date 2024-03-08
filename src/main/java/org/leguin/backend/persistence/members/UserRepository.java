package org.leguin.backend.persistence.members;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;


@Repository
public interface UserRepository extends JpaRepository<User, UUID>{
    List<User> findByEmail(String email);    
}
