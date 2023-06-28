package com.ramp.accountingservice.repository;

import com.ramp.accountingservice.entity.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TransactionRepository extends JpaRepository<Transaction, Integer> {
    List<Transaction> findByVendorDisplayName(String displayName);

}
