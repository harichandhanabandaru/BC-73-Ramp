package com.ramp.accountingservice.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class TransactionDto {
    int id;

    double amount;

    LocalDateTime date;

    int receipt;

    int memo;

    String syncStatus;

    LocalDateTime createdDate;

    LocalDateTime updatedDate;

    private String merchantName;
    private String productName;
    private String quickbookCategory;
    private String userName;
    private String virtualName;
}
