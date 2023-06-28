package com.billManagement.billservice.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigInteger;
import java.sql.Blob;
import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "file")
public class File {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;

	@Column(name = "type")
	String type;

	@Column(name = "name")
	String name;

	@Column(name = "created_date")
	LocalDateTime createdDate;

	@Column(name = "updated_date")
	LocalDateTime updatedDate;

	@Column(name = "data")
	private Blob data;

    
	@OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "file")
	private Bill bill;

	public File() {
	}

	public File(String type, String name, Blob data, LocalDateTime createdDate, LocalDateTime updatedDate) {
		this.name = name;
		this.type = type;
		this.data = data;
		this.createdDate = createdDate;
		this.updatedDate = updatedDate;
	}

}