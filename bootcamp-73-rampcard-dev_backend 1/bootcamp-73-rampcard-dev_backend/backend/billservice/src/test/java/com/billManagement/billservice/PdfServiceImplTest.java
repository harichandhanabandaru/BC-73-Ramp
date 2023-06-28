package com.billManagement.billservice;

import com.billManagement.billservice.PatternMatcher.FieldExtractor;
import com.billManagement.billservice.dto.pdfFileExtracts;
import com.billManagement.billservice.service.PdfService;
import com.billManagement.billservice.service.PdfServiceImpl;
import org.apache.pdfbox.cos.COSDocument;
import org.apache.pdfbox.io.RandomAccessBufferedFileInputStream;
import org.apache.pdfbox.pdfparser.PDFParser;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.io.IOException;
import java.io.InputStream;

import static org.mockito.Mockito.*;

public class PdfServiceImplTest {

	private PdfService pdfService;

	@Mock
	private FieldExtractor fieldExtractor;

	@BeforeEach
	public void setup() {
		MockitoAnnotations.initMocks(this);
		pdfService = new PdfServiceImpl();
	}

	@Test
	public void testExtractTextFromPdf() throws IOException {
		String filePath = "path/to/pdf/file.pdf";
		String parsedText = "Sample parsed text";
		String phoneNumber = "1234567890";
		String invoiceNumber = "INV-123";
		String location = "Sample Location";
		String invoiceDate = "2023-05-25";
		String email = "example@example.com";
		String amount = "100.00";
		String name = "John Doe";

		PDFTextStripper pdfStripper = mock(PDFTextStripper.class);
		PDDocument pdDoc = mock(PDDocument.class);
		FieldExtractor feildsExtractor = mock(FieldExtractor.class);

		InputStream inputStream = mock(RandomAccessBufferedFileInputStream.class);
		PDFParser parser = mock(PDFParser.class);
		COSDocument cosDoc = mock(COSDocument.class);

		pdfFileExtracts expectedExtracts = new pdfFileExtracts();
		expectedExtracts.setContact(email);
		expectedExtracts.setInvoiceNumber(invoiceNumber);
		expectedExtracts.setBillDueDate(invoiceDate);
		expectedExtracts.setLocation(location);
		expectedExtracts.setAmount(amount);
		expectedExtracts.setInvoiceDate(invoiceDate);
		expectedExtracts.setCategory("Equipment rental");
		expectedExtracts.setClassValue("Rent");
		expectedExtracts.setCustomJob("Manager");
		expectedExtracts.setPaymentType("ACH (Direct deposit)");
		expectedExtracts.setName(name);

		when(fieldExtractor.PhoneNumber(parsedText)).thenReturn(phoneNumber);
		when(fieldExtractor.InvoiceNumber(parsedText)).thenReturn(invoiceNumber);
		when(fieldExtractor.Location(parsedText)).thenReturn(location);
		when(fieldExtractor.inVoiceDate(parsedText)).thenReturn(invoiceDate);
		when(fieldExtractor.email(parsedText)).thenReturn(email);
		when(fieldExtractor.Amount(parsedText)).thenReturn(amount);
		when(fieldExtractor.name(parsedText)).thenReturn(name);

		when(inputStream.read()).thenReturn(-1);
		when(inputStream.markSupported()).thenReturn(true);


		when(parser.getDocument()).thenReturn(cosDoc);
		when(pdfStripper.getText(pdDoc)).thenReturn(parsedText);

	}
}
