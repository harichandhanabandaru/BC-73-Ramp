package com.billManagement.billservice.dto;

import jakarta.persistence.Column;
import lombok.Data;

import java.math.BigInteger;
import java.time.LocalDateTime;

@Data
public class EmployeeDto {
	String employeeId;
	String name;
	String email;
	BigInteger contact;
	LocalDateTime joiningDate;
	LocalDateTime createdDate;
	LocalDateTime updatedDate;
	private int id;


}
