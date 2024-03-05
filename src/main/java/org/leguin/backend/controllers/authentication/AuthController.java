package org.leguin.backend.controllers.authentication;

import java.util.Optional;

import org.leguin.backend.services.LoginMember;
import org.leguin.backend.services.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {

    private MemberLoginService memberLoginService;
    private CuratorLoginService curatorLoginService;
    private LoginService loginService;

    public AuthController(@Autowired MemberLoginService memberLoginService,
            @Autowired CuratorLoginService curatorLoginService,
            @Autowired LoginService loginService) {
        this.memberLoginService = memberLoginService;
        this.curatorLoginService = curatorLoginService;
        this.loginService = loginService;
    }

    @PostMapping("/auth/login")
    public LoginResponse login(@RequestBody LoginRequest request) {

        Optional<LoginMember> loginMember = loginService.login(request.getUser(), request.getPassword());
        if (loginMember.isPresent()) {
            LoginResponse response = new LoginResponse();
            response.setLoginType("member");
            response.setSession(loginMember.get());
            return response;
        }

        if (curatorLoginService.authenticate(request.getUser(), request.getPassword())) {
            LoginResponse response = new LoginResponse();
            response.setLoginType("curator");
            return response;
        }
        
        return LoginResponse.fail();
    }

}
