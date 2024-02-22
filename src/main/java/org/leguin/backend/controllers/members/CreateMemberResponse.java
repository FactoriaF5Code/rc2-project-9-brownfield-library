package org.leguin.backend.controllers.members;

public class CreateMemberResponse {

    private String msg;

    public CreateMemberResponse(String id) {
        this.msg = "Member " + id + " created successfully.";
    }

    public String getMsg() {
        return msg;
    }

}
