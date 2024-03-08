package org.leguin.backend.controllers.authentication;

import java.util.Optional;

import org.leguin.backend.services.login.LoginService;
import org.leguin.backend.services.login.SessionInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {
    private CuratorLoginService curatorLoginService;
    private LoginService loginService;

    public AuthController(@Autowired CuratorLoginService curatorLoginService,
            @Autowired LoginService loginService) {
        this.curatorLoginService = curatorLoginService;
        this.loginService = loginService;
    }

    @PostMapping("/auth/login")
    public LoginResponse login(@RequestBody LoginRequest request) {

        Optional<SessionInfo> loginSession = loginService.login(request.getUser(), request.getPassword());
        if (loginSession.isPresent()) {
            LoginResponse response = new LoginResponse();
            response.setLoginType("member");
            response.setSession(loginSession.get());
            return response;
        }

        return LoginResponse.fail();
    }

}
