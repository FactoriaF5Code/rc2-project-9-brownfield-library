package org.leguin.backend.persistence.members;

import java.util.UUID;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "members")
public class Member {
    @Id
    private UUID id;
    private String firstName;
    private String lastName;
    private String address;
    private String email;
    private String phone;

    public Member() {
    }

    public Member(UUID id, String firstName, String lastName, String address, String email, String phone) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.email = email;
        this.phone = phone;
    }

}
