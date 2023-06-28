package com.ramp.userservice;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.BDDMockito.given;
import static org.mockito.MockitoAnnotations.openMocks;


import java.util.Optional;

import com.ramp.userservice.repository.UserRepository;
import com.ramp.userservice.security.AuthenticationService;
import com.ramp.userservice.security.JwtService;
import com.ramp.userservice.service.UserService;
import com.ramp.userservice.service.UserServiceImpl;
import com.ramp.userservice.entity.User;
import org.checkerframework.checker.nullness.qual.MonotonicNonNull;
import org.checkerframework.checker.nullness.qual.RequiresNonNull;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
public class UserServiceTest {
    private @MonotonicNonNull UserService userService;
    @Mock private @MonotonicNonNull UserRepository userRepository;
    @Mock private @MonotonicNonNull JwtService jwtService;
    @Mock private @MonotonicNonNull AuthenticationService authenticationService;

    @BeforeEach
    @RequiresNonNull({"userRepository", "jwtService", "authenticationService"})
    public void setUp() {
        openMocks(this);
        given(jwtService.generateToken(any())).willReturn("token");
        userService =
                new UserServiceImpl(userRepository, jwtService, authenticationService);
    }

    @Test
    @RequiresNonNull({"userRepository", "userService"})
    public void testCreateUser_normal() {
        final var newUser = new User("email@example.com", "hash","bindu");
        newUser.setId(1);
        given(userRepository.save(any())).willReturn(newUser);
        final var resp = userService.register(new User("email@example.com", "hash","bindu"));
        final var user = resp.getBody();
        assertThat(user.getEmail()).isEqualTo("email@example.com");
        assertThat(user.getToken()).isNotBlank();
    }

    @Test
    @RequiresNonNull({"userRepository", "userService"})
    public void testLogin_normal() {
        final var user = new User("email@example.com", "hash","bindu");
        given(authenticationService.authenticate("email@example.com", "123"))
                .willReturn(Optional.of(user));
        given(jwtService.generateToken(user)).willReturn("token");
        final var resp = userService.login(new User("email@example.com", "123"));
        final var userWithToken = resp.getBody();
        assertThat(userWithToken.getEmail()).isEqualTo(user.getEmail());
        assertThat(userWithToken.getToken()).isEqualTo("token");
    }

}
