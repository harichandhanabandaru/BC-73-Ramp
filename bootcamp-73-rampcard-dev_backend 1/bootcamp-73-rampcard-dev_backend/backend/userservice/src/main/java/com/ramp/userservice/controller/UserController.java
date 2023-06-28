package com.ramp.userservice.controller;

import com.ramp.userservice.dto.UserDto;
import com.ramp.userservice.entity.User;
import com.ramp.userservice.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
@Slf4j
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/signup")
    public ResponseEntity<UserDto>  userSignup(@RequestBody User user) {
        log.info("Processing new signup request");
        return userService.register(user);
    }

    @PostMapping("/login")
    public UserDto userLogin(@RequestBody User user) {
        log.info("Processing new login request");
        return userService.login(user).getBody();
    }

    @PostMapping("/loginWithGoogle")
    public UserDto userLoginWithGoogle(@RequestBody User email) {
        log.info("Processing new login request");
        return userService.loginWithGoogle(email).getBody();
    }
}
