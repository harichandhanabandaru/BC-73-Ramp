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
@Table(name = "transaction")
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    int id;

    @Column(name = "amount")
    double amount;

    @Column(name = "date")
    LocalDateTime date;

    @Column(name = "receipt")
    int receipt;

    @Column(name = "memo")
    int memo;

    @Column(name = "status", length = 45)
    String syncStatus;

    @Column(name = "created_date")
    LocalDateTime createdDate;

    @Column(name = "updated_date")
    LocalDateTime updatedDate;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "vendor_id")
    private Vendor vendor;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "quickbook_id")
    private QuickBook quickbook;

    @Column(name = "user_name")
    String userName;

    @Column(name = "virtual_name")
    String virtualName;

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