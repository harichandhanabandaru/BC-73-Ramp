package com.ramp.userservice.security;

import com.ramp.userservice.repository.UserRepository;
import com.ramp.userservice.entity.User;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import java.util.Date;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class JJwtService implements JwtService {
    private final String secret;
    private final int sessionTime;
    private final UserRepository userRepository;

    private final Logger logger = LoggerFactory.getLogger(JJwtService.class);

    /**
     * Creates DefaultJwtService instance.
     *
     * @param secret jwt secret
     * @param sessionTime jwt session time in seconds
     * @param userRepository user repository
     */
    @Autowired
    public JJwtService(
            @Value("${jwt.secret}") String secret,
            @Value("${jwt.sessionTime}") int sessionTime,
            UserRepository userRepository) {
        this.secret = secret;
        this.sessionTime = sessionTime;
        this.userRepository = userRepository;
    }

    /** {@inheritDoc} */
    @Override
    public String generateToken(User user) {
        return Jwts.builder()
                .setSubject(Long.toString(user.getId()))
                .setExpiration(new Date(System.currentTimeMillis() + sessionTime * 1000))
                .signWith(SignatureAlgorithm.HS512, secret)
                .compact();
    }

    /** {@inheritDoc} */
    @Override
    public Optional<User> getUser(String token) {

        try {
            final var subject =
                    Jwts.parser().setSigningKey(secret).parseClaimsJws(token).getBody().getSubject();
            final var userId = Long.parseLong(subject);
            return userRepository.findById(userId);
        } catch (Exception e) {
            logger.warn(String.format("Error getting user from token: %s", e.getMessage()));
            return Optional.empty();
        }
    }

    /** {@inheritDoc} */
    @Override
    public Boolean validateToken(String token) {
        try {
            Claims claims = Jwts.parser().setSigningKey(secret).parseClaimsJws(token).getBody();
            Boolean isTokenExpired = claims.getExpiration().before(new Date());

            return isTokenExpired;
        } catch (Exception e) {
            logger.warn(String.format("Error validating token: %s", e.getMessage()));
            return false;
        }
    }
}
