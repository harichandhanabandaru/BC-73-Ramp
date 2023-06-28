package com.ramp.userservice.security;


import com.ramp.userservice.entity.User;
import java.util.Optional;

public interface JwtService {
    /** Generates JWT token for a given user. */
    String generateToken(User user);

    /** Finds a user that given token was generated for. */
    Optional<User> getUser(String token);

    Boolean validateToken(String token);
}

