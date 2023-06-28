package com.ramp.userservice.service;

import com.ramp.userservice.dto.UserDto;
import com.ramp.userservice.entity.User;
import org.springframework.http.ResponseEntity;

public interface UserService {
    ResponseEntity<UserDto> register(User user);

    ResponseEntity<UserDto> login(User user);
    ResponseEntity<UserDto> loginWithGoogle(User email);
}
