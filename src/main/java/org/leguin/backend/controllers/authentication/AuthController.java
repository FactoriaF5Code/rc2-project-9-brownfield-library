package org.leguin.backend.controllers.authentication;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {

    private MemberLoginService memberLoginService;
    private CuratorLoginService curatorLoginService;

    public AuthController(@Autowired MemberLoginService memberLoginService,
            @Autowired CuratorLoginService curatorLoginService) {
        this.memberLoginService = memberLoginService;
        this.curatorLoginService = curatorLoginService;
    }

    @PostMapping("/auth/login")
    public LoginResponse login(@RequestBody LoginRequest request) {
        if (memberLoginService.authenticate(request.getUser(), request.getPassword())) {
            LoginResponse response = new LoginResponse();
            response.setLoginType("member");
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
