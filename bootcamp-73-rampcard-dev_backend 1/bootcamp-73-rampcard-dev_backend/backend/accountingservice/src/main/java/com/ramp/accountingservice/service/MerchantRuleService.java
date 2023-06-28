package com.ramp.accountingservice.service;

import com.ramp.accountingservice.entity.MerchantRule;

public interface MerchantRuleService {
    public MerchantRule createMerchantRule(String vendorDisplayName, String quickbookName);

    public Long getMerchantRuleCount();
}
