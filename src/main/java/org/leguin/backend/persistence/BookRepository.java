package org.leguin.backend.persistence;

import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookRepository extends JpaRepository<Book, UUID> {
    List<Book> findByTitleContaining(String query);

    List<Book> findByTitleLikeAndAvailable(String string, boolean b);
}
