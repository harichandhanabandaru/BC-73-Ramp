package com.ramp.userservice.service;

import com.ramp.userservice.dto.UserDto;
import com.ramp.userservice.exception.EmailAlreadyExistsException;
import com.ramp.userservice.repository.UserRepository;
import com.ramp.userservice.exception.UserNotFoundException;
import com.ramp.userservice.security.AuthenticationService;
import com.ramp.userservice.security.JwtService;
import com.ramp.userservice.entity.User;

import com.ramp.userservice.utils.UserUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

import static com.ramp.userservice.utils.UserUtils.toUserResponse;

@Service
public class UserServiceImpl extends BaseService implements UserService {

    private final UserRepository userRepository;
    private final JwtService jwtService;
    private final AuthenticationService authenticationService;
    @Autowired
    public UserServiceImpl(
            UserRepository userRepository,
            JwtService jwtService,
            AuthenticationService authenticationService) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
        this.authenticationService = authenticationService;
    }

    @Override
    public ResponseEntity<UserDto> register(User user) {
        String email = user.getEmail();
        userRepository.findByEmail(email).ifPresent(userDetails -> {
            throw new EmailAlreadyExistsException("Email already used");
        });
        user.setPassword(authenticationService.encodePassword(user.getPassword()));
        userRepository.save(user);
        return ok(UserUtils.toUserResponse(user, jwtService.generateToken(user)));
    }

    @Override
    public ResponseEntity<UserDto> login(User user) {
        System.out.println("Inside Login method " + user);
        return authenticationService
                .authenticate(user.getEmail(), user.getPassword())
                .map(u -> ok(UserUtils.toUserResponse(u, jwtService.generateToken(u)))).get();
    }

    @Override
    public ResponseEntity<UserDto> loginWithGoogle(User email) {
        Optional<User> user =  userRepository.findByEmail(email.getEmail());
        if (user.isPresent()) {
            return ok(toUserResponse(user.get(), jwtService.generateToken(user.get())));
        } else {
           throw new UserNotFoundException("User with email not found");
        }
    }

    @Override
    public AuthenticationService getAuthenticationService() {
        return authenticationService;
    }
}
