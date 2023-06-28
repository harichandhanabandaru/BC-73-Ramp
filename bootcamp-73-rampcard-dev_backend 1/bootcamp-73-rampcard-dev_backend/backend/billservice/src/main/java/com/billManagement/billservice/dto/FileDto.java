package com.billManagement.billservice.dto;

import jakarta.persistence.Column;
import jakarta.persistence.Lob;
import lombok.Data;

import java.sql.Blob;
import java.time.LocalDateTime;

@Data
public class FileDto {

	int id;
	String type;
	String name;
	Blob data;
	LocalDateTime createdDate;
	LocalDateTime updatedDate;
}
