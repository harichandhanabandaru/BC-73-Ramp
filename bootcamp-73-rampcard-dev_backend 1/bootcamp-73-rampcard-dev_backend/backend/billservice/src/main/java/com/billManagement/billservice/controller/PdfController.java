package com.billManagement.billservice.controller;

import com.billManagement.billservice.PatternMatcher.FieldExtractor;
import com.billManagement.billservice.dto.pdfFileExtracts;
import com.billManagement.billservice.service.PdfServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("bill/pdf")
@RestController
public class PdfController {

	private final PdfServiceImpl pdfExtractorService;

    FieldExtractor feildsExtractor = new FieldExtractor();

	@Autowired
	public PdfController(PdfServiceImpl pdfExtractorService) {
		this.pdfExtractorService = pdfExtractorService;
	}

	@PostMapping("/extractText")
	public pdfFileExtracts extractText(@RequestParam("file") String file) {
		pdfFileExtracts pdfFileExtracts = pdfExtractorService.extractTextFromPdf(file);

		return pdfFileExtracts;
	}

	@PostMapping("/textFromFile")
	public pdfFileExtracts textExtractFromFile(@RequestBody String file) {

		String phoneNumber = feildsExtractor.PhoneNumber(file);
		String invoiceNumber = feildsExtractor.InvoiceNumber(file);
		String Location = feildsExtractor.Location(file);
		String inVoiceDate = feildsExtractor.inVoiceDate(file);
		String email = feildsExtractor.email(file);
		String amount = feildsExtractor.Amount(file);
		String name = feildsExtractor.name(file);
		pdfFileExtracts pdfFileExtracts = new pdfFileExtracts();
		pdfFileExtracts.setContact(email);
		pdfFileExtracts.setInvoiceNumber(invoiceNumber);
		pdfFileExtracts.setBillDueDate(inVoiceDate);
		pdfFileExtracts.setLocation(Location);
		pdfFileExtracts.setAmount(amount);
		pdfFileExtracts.setInvoiceDate(inVoiceDate);
		pdfFileExtracts.setCategory("Equipment rental");
		pdfFileExtracts.setClassValue("Rent");
		pdfFileExtracts.setCustomJob("Manager");
		pdfFileExtracts.setPaymentType("ACH (Direct deposit)");
		pdfFileExtracts.setName(name);


		return pdfFileExtracts;
	}


}
