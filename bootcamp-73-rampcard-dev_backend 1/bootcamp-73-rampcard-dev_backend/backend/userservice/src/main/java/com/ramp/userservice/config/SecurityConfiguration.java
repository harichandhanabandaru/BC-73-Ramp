package com.ramp.userservice.config;

import java.util.List;

import com.ramp.userservice.security.JwtTokenFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.HttpStatusEntryPoint;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;

@EnableWebSecurity
@Configuration
public class SecurityConfiguration {

    private final JwtTokenFilter jwtTokenFilter;

    @Autowired
    public SecurityConfiguration(JwtTokenFilter jwtTokenFilter) {
        this.jwtTokenFilter = jwtTokenFilter;
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        // Enable CORS and disable CSRF
        http.cors()
                .configurationSource(
                        request -> {
                            var cors = new CorsConfiguration();
                            cors.setAllowedOrigins(List.of("http://localhost:8080","http://localhost:9191","https://bc73fe.bootcamp64.tk"));
                            cors.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
                            cors.setAllowedHeaders(List.of("*"));
                            return cors;
                        })
                .and()
                .csrf()
                .disable();

        // Set session management to stateless
        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);

        // Set unauthorized requests exception handler
        http.exceptionHandling()
                .authenticationEntryPoint(new HttpStatusEntryPoint(HttpStatus.UNAUTHORIZED));

        // Set permissions on endpoints
        http.authorizeRequests()
                .requestMatchers(HttpMethod.POST, "/user/*")
                .permitAll()
                .anyRequest()
                .authenticated();

        http.addFilterBefore(jwtTokenFilter, UsernamePasswordAuthenticationFilter.class);
        return http.build();
    }
}

