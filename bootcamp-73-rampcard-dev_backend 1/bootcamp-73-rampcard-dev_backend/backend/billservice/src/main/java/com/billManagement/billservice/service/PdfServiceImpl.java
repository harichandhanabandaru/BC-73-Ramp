package com.billManagement.billservice.service;

import com.billManagement.billservice.PatternMatcher.FieldExtractor;
import com.billManagement.billservice.dto.pdfFileExtracts;
import org.apache.pdfbox.cos.COSDocument;
import org.apache.pdfbox.io.RandomAccessBufferedFileInputStream;
import org.apache.pdfbox.io.RandomAccessRead;
import org.apache.pdfbox.pdfparser.PDFParser;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.io.InputStream;

@Service
public class PdfServiceImpl implements PdfService {

	@Override
	public pdfFileExtracts extractTextFromPdf(String filePath) {


		FieldExtractor feildsExtractor = new FieldExtractor();


		PDFTextStripper pdfStripper = null;
		PDDocument pdDoc = null;

		java.io.File file = new java.io.File(filePath);


		try (InputStream inputStream = new RandomAccessBufferedFileInputStream(file)) {
			PDFParser parser = new PDFParser((RandomAccessRead) inputStream);
			parser.parse();

			try (COSDocument cosDoc = parser.getDocument()) {
				pdfStripper = new PDFTextStripper();
				pdDoc = new PDDocument(cosDoc);
				pdfStripper.setStartPage(1);
				pdfStripper.setEndPage(5);
				String parsedText = pdfStripper.getText(pdDoc);
				System.out.println(parsedText);


				String phoneNumber = feildsExtractor.PhoneNumber(parsedText);
				String invoiceNumber = feildsExtractor.InvoiceNumber(parsedText);
				String Location = feildsExtractor.Location(parsedText);
				String inVoiceDate = feildsExtractor.inVoiceDate(parsedText);
				String email = feildsExtractor.email(parsedText);
				String amount = feildsExtractor.Amount(parsedText);
				String name = feildsExtractor.name(parsedText);

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
		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			if (pdDoc != null) {
				try {
					pdDoc.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		}


		return null;
	}
}