package com.ramp.accountingservice.repository;

import com.ramp.accountingservice.entity.MerchantRule;
import com.ramp.accountingservice.entity.Vendor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MerchantRuleRepository extends JpaRepository<MerchantRule, Integer> {
    MerchantRule findByVendor(Vendor vendor);
}
