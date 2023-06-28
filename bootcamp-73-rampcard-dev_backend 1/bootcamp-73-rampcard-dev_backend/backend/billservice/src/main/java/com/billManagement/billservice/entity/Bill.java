package com.billManagement.billservice.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigInteger;
import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@Table(name = "bill")
public class Bill {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	int id;

	@Column(name = "invoice_date")
	LocalDateTime inVoiceDate;

	@Column(name = "invoice_number", length = 45)
	String inVoiceNumber;

	@Column(name = "due_date")
	LocalDateTime dueDate;

	@Column(name = "amount")
	double amount;

	@Column(name = "account_number", length = 45)
	String accountNumber;

	@Column(name = "status", length = 45)
	String status;

	@Column(name = "created_date")
	LocalDateTime createdDate;

	@Column(name = "updated_date")
	LocalDateTime updatedDate;


	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "employee_id")
	private Employee employee;


	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "file_id")
	private File file;


	public Bill() {
	}

	public Bill(int id, LocalDateTime inVoiceDate, LocalDateTime dueDate, double amount, String accountNumber, String status, LocalDateTime createdDate, LocalDateTime updatedDate, String inVoiceNumber) {
		this.id = id;
		this.inVoiceDate = inVoiceDate;
		this.dueDate = dueDate;
		this.amount = amount;
		this.accountNumber = accountNumber;
		this.status = status;
		this.createdDate = createdDate;
		this.updatedDate = updatedDate;
		this.inVoiceNumber = inVoiceNumber;
	}

}