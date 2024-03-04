package org.leguin.backend.persistence.members;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface MemberRepository extends JpaRepository<Member, UUID> {
    List<Member> findByEmail(String email);

    Member findByMemberId(UUID memberId);
}
