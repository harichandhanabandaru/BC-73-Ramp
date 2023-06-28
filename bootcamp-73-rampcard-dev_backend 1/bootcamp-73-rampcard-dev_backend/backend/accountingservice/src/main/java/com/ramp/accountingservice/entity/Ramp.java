package com.ramp.accountingservice.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "ramp")
public class Ramp {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "ramp_name", unique = true,nullable = false)
    private String ramp;



    public Ramp() {
    }

    public Ramp(String ramp) {
        this.ramp = ramp;
    }

}
