package com.billManagement.billservice.entity;


import jakarta.persistence.GenerationType;
import jakarta.persistence.FetchType;
import jakarta.persistence.CascadeType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

import java.math.BigInteger;
import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "employee")
public class Employee {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;

	@Column(name = "employee_id")
	String employeeId;


	@Column(name = "name")
	String name;

	@Column(name = "email")
	String email;
	@Column(name = "contact")
	BigInteger contact;

	@Column(name = "joining_date")
	LocalDateTime joiningDate;
	@Column(name = "created_date")
	LocalDateTime createdDate;
	@Column(name = "Updated_date")
	LocalDateTime updatedDate;


	@OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "employee")
	private List<Bill> bills;

	public Employee() {
	}

	public Employee(String employeeId, String name, String email, BigInteger contact, LocalDateTime joiningDate, LocalDateTime createdDate, LocalDateTime updatedDate) {
		this.employeeId = employeeId;
		this.name = name;
		this.email = email;
		this.contact = contact;
		this.joiningDate = joiningDate;
		this.createdDate = createdDate;
		this.updatedDate = updatedDate;
	}

}