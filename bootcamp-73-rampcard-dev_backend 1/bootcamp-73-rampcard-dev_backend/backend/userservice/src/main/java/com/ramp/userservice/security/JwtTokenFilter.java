package com.ramp.userservice.security;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import com.ramp.userservice.entity.User;
import jakarta.servlet.FilterChain;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

@Component
public class JwtTokenFilter extends OncePerRequestFilter {
    private static final String AUTH_HEADER = "Authorization";
    private static final String ADMIN = "ADMIN";
    private static final String PUBLIC = "PUBLIC";
    private static final String WRITER = "WRITER";
    private final JwtService jwtService;

    @Autowired
    public JwtTokenFilter(JwtService jwtService) {
        this.jwtService = jwtService;
    }

    private Optional<String> getTokenString(String header) {
        if (header == null) {
            return Optional.empty();
        } else {
            final var split = header.split(" ");
            if (split.length < 2) {
                return Optional.empty();
            } else {
                return Optional.ofNullable(split[1]);
            }
        }
    }

    @Override
    protected void doFilterInternal(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, FilterChain filterChain) throws jakarta.servlet.ServletException, IOException {
        getTokenString(httpServletRequest.getHeader(AUTH_HEADER))
                .ifPresent(
                        (String token) -> {
                            jwtService
                                    .getUser(token)
                                    .ifPresent(
                                            (User user) -> {
                                                Boolean isExpired = jwtService.validateToken(token);
                                                UserDetails ud =
                                                        org.springframework.security.core.userdetails.User.withUsername(
                                                                        user.getEmail())
                                                                .password(user.getPassword())
                                                                .accountExpired(false)
                                                                .accountLocked(false)
                                                                .credentialsExpired(isExpired)
                                                                .disabled(false)
                                                                .build();
                                                UsernamePasswordAuthenticationToken authenticationToken =
                                                        new UsernamePasswordAuthenticationToken(
                                                                ud, token, ud == null ? List.of() : ud.getAuthorities());
                                                authenticationToken.setDetails(
                                                        new WebAuthenticationDetailsSource().buildDetails(httpServletRequest));
                                                SecurityContextHolder.getContext().setAuthentication(authenticationToken);
                                            });
                        });
        filterChain.doFilter(httpServletRequest, httpServletResponse);
    }
}

