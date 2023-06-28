package com.ramp.accountingservice.service;

import com.ramp.accountingservice.dto.TransactionDto;
import com.ramp.accountingservice.entity.MerchantRule;
import com.ramp.accountingservice.entity.QuickBook;
import com.ramp.accountingservice.entity.Transaction;
import com.ramp.accountingservice.entity.Vendor;
import com.ramp.accountingservice.exception.InvalidQuickBookException;
import com.ramp.accountingservice.exception.InvalidVendorException;
import com.ramp.accountingservice.exception.TransactionNotFoundException;
import com.ramp.accountingservice.repository.MerchantRuleRepository;
import com.ramp.accountingservice.repository.QuickBookRepository;
import com.ramp.accountingservice.repository.TransactionRepository;
import com.ramp.accountingservice.repository.VendorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class TransactionServiceImpl implements TransactionService{
    private final TransactionRepository transactionRepository;
    private final VendorRepository vendorRepository;
    private final QuickBookRepository quickbookRepository;
    private final MerchantRuleRepository merchantRuleRepository;
    @Autowired
    public TransactionServiceImpl(TransactionRepository transactionRepository, VendorRepository vendorRepository,
                                  QuickBookRepository quickbookRepository, MerchantRuleRepository merchantRuleRepository) {
        this.transactionRepository = transactionRepository;
        this.vendorRepository = vendorRepository;
        this.quickbookRepository = quickbookRepository;
        this.merchantRuleRepository = merchantRuleRepository;
    }


    @Override
    public List<TransactionDto> findAll() {
        return transactionRepository.findAll().stream().map(this::convertEntityToDto).collect(Collectors.toList());
    }
    @Override
    public List<TransactionDto> getTransactionsByVendorDisplayName(String displayName) {
        return transactionRepository.findByVendorDisplayName(displayName).stream().map(this::convertEntityToDto).collect(Collectors.toList());
    }
    @Override
    public void updateTransactionsWithVendorDisplayNameToQuickbookName(String vendorDisplayName, String quickbookName) {
        Vendor vendor = vendorRepository.findByDisplayName(vendorDisplayName);
        QuickBook quickbook = quickbookRepository.findByName(quickbookName);

        if (vendor == null ) {
            throw new InvalidVendorException("Invalid vendor");
        }
        if(quickbook == null ){
            throw new InvalidQuickBookException("Invalid quickbook");
        }
        List<Transaction> transactions = transactionRepository.findByVendorDisplayName(vendorDisplayName);
        for (Transaction transaction : transactions) {
            transaction.setQuickbook(quickbook);
        }
        transactionRepository.saveAll(transactions);
        MerchantRule merchantRule = merchantRuleRepository.findByVendor(vendor);
        if(merchantRule == null){
            MerchantRule newMerchantRule = new MerchantRule();
            newMerchantRule.setVendor(vendor);
            newMerchantRule.setQuickbook(quickbook);
            newMerchantRule.setCreatedDate(LocalDateTime.now());
            newMerchantRule.setUpdatedDate(LocalDateTime.now());
            merchantRuleRepository.save(newMerchantRule);
        }
    }
    @Override
    public void deleteTransaction(int id) {
        Optional<Transaction> transaction= transactionRepository.findById(id);
        if(transaction.isEmpty()){
            throw new TransactionNotFoundException("Transaction with id: "+id+" not found");
        }
        transactionRepository.deleteById(id);
    }
    private TransactionDto convertEntityToDto(Transaction transaction) {
        TransactionDto transactionDto = new TransactionDto();
        transactionDto.setId(transaction.getId());
        transactionDto.setAmount(transaction.getAmount());
        transactionDto.setDate(transaction.getDate());
        transactionDto.setReceipt(transaction.getReceipt());
        transactionDto.setMemo(transaction.getMemo());
        transactionDto.setSyncStatus(transaction.getSyncStatus());
        transactionDto.setCreatedDate(transaction.getCreatedDate());
        transactionDto.setUpdatedDate(transaction.getUpdatedDate());
        transactionDto.setMerchantName(transaction.getVendor().getDisplayName());
        transactionDto.setProductName(transaction.getVendor().getShortName());
        transactionDto.setUserName(transaction.getUserName());
        transactionDto.setVirtualName(transaction.getVirtualName());
        QuickBook quickbook = transaction.getQuickbook();
        if (quickbook != null) {
            transactionDto.setQuickbookCategory(quickbook.getName());
        }
        return transactionDto;
    }
}
