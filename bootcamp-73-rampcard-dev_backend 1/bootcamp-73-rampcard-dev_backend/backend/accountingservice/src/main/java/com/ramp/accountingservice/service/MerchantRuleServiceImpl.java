package com.ramp.accountingservice.service;

import com.ramp.accountingservice.entity.MerchantRule;
import com.ramp.accountingservice.entity.QuickBook;
import com.ramp.accountingservice.entity.Vendor;
import com.ramp.accountingservice.exception.InvalidQuickBookException;
import com.ramp.accountingservice.exception.InvalidVendorException;
import com.ramp.accountingservice.repository.MerchantRuleRepository;
import com.ramp.accountingservice.repository.QuickBookRepository;
import com.ramp.accountingservice.repository.VendorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
@Service
public class MerchantRuleServiceImpl implements MerchantRuleService{
    private final MerchantRuleRepository merchantRuleRepository;
    private final VendorRepository vendorRepository;
    private final QuickBookRepository quickbookRepository;
    @Autowired
    public MerchantRuleServiceImpl(
            MerchantRuleRepository merchantRuleRepository,
            VendorRepository vendorRepository,
            QuickBookRepository quickbookRepository
    ) {
        this.merchantRuleRepository = merchantRuleRepository;
        this.vendorRepository = vendorRepository;
        this.quickbookRepository = quickbookRepository;
    }
    @Override
    public MerchantRule createMerchantRule(String vendorDisplayName, String quickbookName) {
        Vendor vendor = vendorRepository.findByDisplayName(vendorDisplayName);
        QuickBook quickbook = quickbookRepository.findByName(quickbookName);

        if (vendor == null ) {
            throw new InvalidVendorException("Invalid vendor");
        }
        if(quickbook == null ){
            throw new InvalidQuickBookException("Invalid quickbook");
        }
        MerchantRule merchantRule = new MerchantRule();
        merchantRule.setVendor(vendor);
        merchantRule.setQuickbook(quickbook);
        merchantRule.setCreatedDate(LocalDateTime.now());
        merchantRule.setUpdatedDate(LocalDateTime.now());

        return merchantRuleRepository.save(merchantRule);
    }
    @Override
    public Long getMerchantRuleCount() {
        return merchantRuleRepository.count();
    }
}
