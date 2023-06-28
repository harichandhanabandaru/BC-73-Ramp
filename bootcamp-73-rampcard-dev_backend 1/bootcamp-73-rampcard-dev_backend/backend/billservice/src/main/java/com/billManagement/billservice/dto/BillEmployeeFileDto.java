package com.billManagement.billservice.dto;

import com.billManagement.billservice.entity.Bill;
import com.billManagement.billservice.entity.Employee;
import com.billManagement.billservice.entity.File;
import lombok.Data;

import java.math.BigInteger;
import java.sql.Blob;
import java.time.LocalDateTime;

@Data
public class BillEmployeeFileDto {

	int id;
	String name;
	String employeeId;
	String email;
	BigInteger contact;
	LocalDateTime joiningDate;
	LocalDateTime createdEmployeeDate;
	LocalDateTime updatedEmployeeDate;
	LocalDateTime inVoiceDate;
	String inVoiceNumber;
	LocalDateTime dueDate;
	double amount;
	String accountNumber;
	String status;
	LocalDateTime createdDate;
	LocalDateTime updatedDate;
	String type;
	String fileName;
	Blob data;
	LocalDateTime createdFileDate;
	LocalDateTime updatedFileDate;


	public void setBill(Bill theBill) {
		this.id=theBill.getId();
		this.inVoiceDate = theBill.getInVoiceDate();
		this.dueDate = theBill.getDueDate();
		this.amount = theBill.getAmount();
		this.accountNumber = theBill.getAccountNumber();
		this.status = theBill.getStatus();
		this.createdDate = theBill.getCreatedDate();
		this.updatedDate = theBill.getUpdatedDate();
		this.inVoiceNumber = theBill.getInVoiceNumber();

	}

	public void setEmployee(Employee employee) {
		this.employeeId = employee.getEmployeeId();
		this.name = employee.getName();
		this.email = employee.getEmail();
		this.contact = employee.getContact();
		this.joiningDate = employee.getJoiningDate();
		this.createdEmployeeDate = employee.getCreatedDate();
		this.updatedEmployeeDate = employee.getUpdatedDate();
	}

	public void setFile(File theFile) {
		this.type = theFile.getType();
		this.fileName = theFile.getName();
		this.data = theFile.getData();
		this.createdFileDate = theFile.getCreatedDate();
		this.updatedFileDate = theFile.getUpdatedDate();

	}
}
