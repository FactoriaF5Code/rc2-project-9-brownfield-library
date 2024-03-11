package org.leguin.backend.services.login;

public class LoginInfo {
    private String loginType;
    private SessionInfo sessionInfo;
    
    public LoginInfo(String loginType, SessionInfo sessionInfo) {
        this.loginType = loginType;
        this.sessionInfo = sessionInfo;
    }
    
    public String getLoginType() {
        return loginType;
    }
    
    public SessionInfo getSessionInfo() {
        return sessionInfo;
    }
}
