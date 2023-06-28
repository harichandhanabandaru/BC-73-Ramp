package com.billManagement.billservice.dto;

import lombok.Data;

@Data
public class pdfFileExtracts {

	String contact;
	String invoiceNumber;
	String location;
	String amount;
	String invoiceDate;
	String billDueDate;
	String category;
	String classValue;
	String customJob;
	String paymentType;
	String name;


}
