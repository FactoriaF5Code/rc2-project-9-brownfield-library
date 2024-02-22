package org.leguin.backend.controllers.members;

public class CreateMemberRequest {
    private String id;
    private String firstName;
    private String lastName;
    private String address;
    private String email;
    private String phone;
    
    public String getId() {
        return id;
    }
    public String getFirstName() {
        return firstName;
    }
    public String getLastName() {
        return lastName;
    }
    public String getAddress() {
        return address;
    }
    public String getEmail() {
        return email;
    }
    public String getPhone() {
        return phone;
    }

    
}
