package org.leguin.backend.controllers.authentication;

import java.util.Optional;

import org.leguin.backend.services.login.LoginInfo;
import org.leguin.backend.services.login.LoginService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {
    private LoginService loginService;

    public AuthController(@Autowired LoginService loginService) {
        this.loginService = loginService;
    }

    @PostMapping("/auth/login")
    public LoginResponse login(@RequestBody LoginRequest request) {

        Optional<LoginInfo> loginInfo = loginService.login(request.getUser(), request.getPassword());
        if (loginInfo.isPresent()) {
            LoginResponse response = new LoginResponse();
            response.setLoginType(loginInfo.get().getLoginType());
            response.setSession(loginInfo.get().getSessionInfo());
            return response;
        }

        return LoginResponse.fail();
    }

}
