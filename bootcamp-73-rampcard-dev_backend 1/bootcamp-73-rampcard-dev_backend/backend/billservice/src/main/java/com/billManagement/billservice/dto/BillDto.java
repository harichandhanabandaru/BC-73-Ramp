package com.billManagement.billservice.dto;

import jakarta.persistence.GeneratedValue;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BillDto {


	int id;
	LocalDateTime inVoiceDate;
	String inVoiceNumber;
	LocalDateTime dueDate;
	double amount;
	String accountNumber;
	String status;
	LocalDateTime createdDate;
	LocalDateTime updatedDate;

}
