package com.ramp.accountingservice.controller;

import com.ramp.accountingservice.entity.MerchantRule;
import com.ramp.accountingservice.service.MerchantRuleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/accounting/merchant-rules")
public class MerchantRuleController {

    private final MerchantRuleService merchantRuleService;
    @Autowired
    public MerchantRuleController(MerchantRuleService merchantRuleService) {
        this.merchantRuleService = merchantRuleService;
    }

    @PostMapping
    public ResponseEntity<MerchantRule> createMerchantRule(
            @RequestParam("vendorDisplayName") String vendorDisplayName,
            @RequestParam("quickbookName") String quickbookName
    ) {
        MerchantRule merchantRule = merchantRuleService.createMerchantRule(vendorDisplayName, quickbookName);
        return ResponseEntity.ok(merchantRule);
    }

    @GetMapping("/count")
    public ResponseEntity<Long> getMerchantRuleCount() {
        Long count = merchantRuleService.getMerchantRuleCount();
        return ResponseEntity.ok(count);
    }
}

