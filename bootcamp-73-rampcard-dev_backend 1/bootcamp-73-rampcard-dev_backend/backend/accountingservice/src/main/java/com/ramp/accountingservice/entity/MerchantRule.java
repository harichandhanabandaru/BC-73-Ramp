package com.ramp.accountingservice.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "merchant_rule")
public class MerchantRule {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    int id;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "vendor_id",unique = true)
    private Vendor vendor;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "quickbook_id")
    private QuickBook quickbook;

    @Column(name = "created_date")
    LocalDateTime createdDate;

    @Column(name = "updated_date")
    LocalDateTime updatedDate;
    @PrePersist
    protected void onCreate() {
        createdDate = LocalDateTime.now();
        updatedDate = LocalDateTime.now();
    }

    @PreUpdate
    protected void onUpdate() {
        updatedDate = LocalDateTime.now();
    }
}
