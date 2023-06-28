package com.billManagement.billservice.PatternMatcher;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class FieldExtractor {
	public String PhoneNumber(String text) {


		Pattern pattern = Pattern.compile("\\b[0-9]{10}\\b");
		Matcher matcher = pattern.matcher(text);


		while (matcher.find()) {
			String phoneNumber = matcher.group();
			System.out.println("Phone Number: " + phoneNumber);

			return phoneNumber;
		}
		return "";
	}

	public String InvoiceNumber(String text) {

		// Regular expression pattern to match invoice numbers
		Pattern pattern = Pattern.compile("Invoice No: (\\d+)");
		Matcher matcher = pattern.matcher(text);

		// Find and print the invoice number
		if (matcher.find()) {
			String invoiceNumber = matcher.group(1);
			System.out.println("Invoice Number: " + invoiceNumber);
			return invoiceNumber;
		}
		return "";
	}

	public String Location(String text) {
		Pattern pattern = Pattern.compile("([A-Z]+)$");
		Matcher matcher = pattern.matcher(text);
		if (matcher.find()) {
			return matcher.group(1);
		}
		return "";
	}

	public String Amount(String text) {
		Pattern pattern = Pattern.compile("\\d+\\.\\d+");
		Matcher matcher = pattern.matcher(text);
		if (matcher.find()) {
			String amountString = matcher.group();
			return String.valueOf(Double.parseDouble(amountString));
		}
		return "0.0";
	}

	public String inVoiceDate(String text) {
		Pattern pattern = Pattern.compile("\\d{2}/\\d{2}/\\d{4}");
		Matcher matcher = pattern.matcher(text);
		if (matcher.find()) {
			String dueDateString = matcher.group();
			DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
			return String.valueOf(LocalDate.parse(dueDateString, formatter));
		}
		return null;

	}

	public String email(String text) {
		Pattern pattern = Pattern.compile("\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}\\b");
		Matcher matcher = pattern.matcher(text);
		if (matcher.find()) {
			return matcher.group();
		}
		return "";
	}

	public String name(String text) {
		Pattern pattern = Pattern.compile("Customer Name\\s*:\\s*(.*)");
		Matcher matcher = pattern.matcher(text);
		if (matcher.find()) {
			return matcher.group(1);
		}
		return "";
	}
}

