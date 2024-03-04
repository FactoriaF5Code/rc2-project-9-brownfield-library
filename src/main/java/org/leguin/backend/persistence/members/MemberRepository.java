package org.leguin.backend.persistence.members;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

@Repository
public interface MemberRepository extends JpaRepository<Member, UUID> {
    List<Member> findByEmail(String email);

    Optional<Member> findById(UUID id);
}
