package com.ramp.accountingservice.repository;

import com.ramp.accountingservice.entity.Vendor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VendorRepository extends JpaRepository<Vendor, Integer> {
    Vendor findByDisplayName(String displayName);
}
