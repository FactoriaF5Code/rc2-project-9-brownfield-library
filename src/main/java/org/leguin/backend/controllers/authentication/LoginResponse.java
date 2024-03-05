package org.leguin.backend.controllers.authentication;

import org.leguin.backend.services.LoginMember;

public class LoginResponse {
    private String loginType;
    private String error;
    private LoginMember session;

    public LoginMember getSession() {
        return session;
    }

    public void setSession(LoginMember session) {
        this.session = session;
    }

    public String getError() {
        return error;
    }

    public void setError(String error) {
        this.error = error;
    }

    public String getLoginType() {
        return loginType;
    }   

    public void setLoginType(String loginType) {
        this.loginType = loginType;
    }

    public static LoginResponse fail() {
        LoginResponse response = new LoginResponse();
        response.setError("true");
        return response;
    }

}
