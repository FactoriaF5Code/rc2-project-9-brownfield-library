package org.leguin.backend.controllers.authentication;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class CuratorLoginService {

    @Value("${app.curator.email}")
    private String curatorUser;
    @Value("${app.curator.password}")
    private String curatorPass;

    public boolean authenticate(String user, String password) {
        return user.equals(curatorUser) && password.equals(curatorPass);
    }

}
