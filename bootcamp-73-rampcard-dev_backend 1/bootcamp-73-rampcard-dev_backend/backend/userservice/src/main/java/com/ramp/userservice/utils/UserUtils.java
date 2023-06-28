package com.ramp.userservice.utils;

import com.ramp.userservice.entity.User;
import com.ramp.userservice.dto.UserDto;
import org.springframework.stereotype.Component;

@Component
public class UserUtils {

    public static UserDto toUserResponse(User u, String token) {
        final var userData = new UserDto();
        userData.setEmail(u.getEmail());
        userData.setName(u.getName());
        if (token != null) {
            userData.setToken(token);
        }
        return userData;
    }
}