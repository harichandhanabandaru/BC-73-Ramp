package com.ramp.userservice.service;


import com.ramp.userservice.exception.UserNotFoundException;
import com.ramp.userservice.security.AuthenticationService;
import com.ramp.userservice.entity.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public abstract class BaseService {
    public <T> ResponseEntity<T> ok(T body) {
        return new ResponseEntity<>(body, HttpStatus.OK);
    }

    /** Returns AuthenticationService. */
    public abstract AuthenticationService getAuthenticationService();

    /**
     * Returns current user or throws an exceptions.
     *
     * @return current user
     * @throws UserNotFoundException if the current is anonymous
     */
    public User currentUserOrThrow() {
        return getAuthenticationService()
                .getCurrentUser()
                .orElseThrow(() -> new UserNotFoundException("Can not authenticate"));
    }
}
