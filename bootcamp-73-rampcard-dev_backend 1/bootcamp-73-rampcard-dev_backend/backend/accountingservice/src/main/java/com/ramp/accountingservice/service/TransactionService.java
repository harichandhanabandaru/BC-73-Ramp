package com.ramp.accountingservice.service;

import com.ramp.accountingservice.dto.TransactionDto;

import java.util.List;

public interface TransactionService {
    List<TransactionDto> findAll();

    List<TransactionDto> getTransactionsByVendorDisplayName(String displayName);

    void updateTransactionsWithVendorDisplayNameToQuickbookName(String vendorDisplayName, String quickbookName);

    void deleteTransaction(int id);
}
