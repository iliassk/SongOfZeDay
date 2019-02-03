package com.iliass.projects.songofzedayback.login;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController("/auth")
public class AuthController {

    private Logger logger;

    public AuthController() {
        logger = LoggerFactory.getLogger(AuthController.class);
    }

    @PostMapping(path = "/login")
    public boolean loginUser(@RequestBody User user) {
        if (user != null && user.getLogin() != null && user.getPassword() != null) {
            return true;
        }
        return false;
    }
}
