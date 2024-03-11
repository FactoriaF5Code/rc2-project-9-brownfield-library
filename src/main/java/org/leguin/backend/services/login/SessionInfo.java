package org.leguin.backend.services.login;


public class SessionInfo {
    private String userName;

    public String getUserName() {
        return userName;
    }

    public SessionInfo(String firstName, String lastName) {
        this.userName = firstName + " " + lastName;
    }

}
