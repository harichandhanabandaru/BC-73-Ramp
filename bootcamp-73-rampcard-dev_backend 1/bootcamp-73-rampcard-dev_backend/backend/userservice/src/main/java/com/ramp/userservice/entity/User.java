package com.ramp.userservice.entity;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Column;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;




@Entity
@Table(name = "users")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @Column(name = "email",nullable = false,unique = true)
    private @NotNull String email;

    @Column(name = "password",nullable = false)
    private String password;

    @Column(name = "name")
    private String name;

    public User(String email) {
        this.email = email;
    }
    public User(String email, String password) {
        this.email = email;
        this.password = password;
    }
    public User(String email, String password,String name) {
        this.email = email;
        this.password = password;
        this.name=name;
    }
}
