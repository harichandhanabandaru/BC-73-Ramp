package com.ramp.accountingservice.controller;

import com.ramp.accountingservice.dto.TransactionDto;
import com.ramp.accountingservice.service.TransactionService;
import org.slf4j.LoggerFactory;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import java.util.List;

@Controller
@RequestMapping("/accounting/transactions")
@RestController
public class TransactionController {

    private static final Logger logger = LoggerFactory.getLogger(TransactionController.class);
    private final TransactionService transactionService;

    @Autowired
    public TransactionController(TransactionService transactionService) {
        this.transactionService = transactionService;
    }

    @GetMapping("/list")
    public List<TransactionDto> getTransactionList() {
        return transactionService.findAll();
    }

    @GetMapping("/vendors/{displayName}")
    public ResponseEntity<List<TransactionDto>> getTransactionsByVendorDisplayName(@PathVariable String displayName) {
        List<TransactionDto> transactions = transactionService.getTransactionsByVendorDisplayName(displayName);
        return ResponseEntity.ok(transactions);
    }

    @PutMapping("/vendors/{vendorDisplayName}/quickbooks/{quickbookName}")
    public ResponseEntity<String> updateTransactionsWithVendorDisplayNameToQuickbookName(
            @PathVariable String vendorDisplayName,
            @PathVariable String quickbookName
    ) {
        transactionService.updateTransactionsWithVendorDisplayNameToQuickbookName(vendorDisplayName, quickbookName);
        return ResponseEntity.ok("Transactions updated successfully.");
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteTransaction(@PathVariable int id) {
        transactionService.deleteTransaction(id);
        return ResponseEntity.ok("Transaction deleted successfully");
    }
}
