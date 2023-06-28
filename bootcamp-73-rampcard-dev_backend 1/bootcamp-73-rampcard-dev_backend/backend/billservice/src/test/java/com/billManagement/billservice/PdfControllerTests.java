package com.billManagement.billservice;

import com.billManagement.billservice.PatternMatcher.FieldExtractor;
import com.billManagement.billservice.controller.PdfController;
import com.billManagement.billservice.service.PdfServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class PdfControllerTests {

	private MockMvc mockMvc;

	@Mock
	private PdfServiceImpl pdfExtractorService;

	private FieldExtractor fieldExtractor;


	@BeforeEach
	void setup() {
		MockitoAnnotations.openMocks(this);

		mockMvc = MockMvcBuilders.standaloneSetup(new PdfController(pdfExtractorService)).build();

	}


	@Test
	public void testExtractText() throws Exception {
		mockMvc.perform(post("/bill/pdf/extractText")
			                .param("file", "example.pdf"))
			.andExpect(status().isOk());
	}

	@Test
	public void testTextExtractFromFile() throws Exception {
		mockMvc.perform(post("/bill/pdf/textFromFile")
			                .contentType(MediaType.TEXT_PLAIN)
			                .content("file content"))
			.andExpect(status().isOk());
	}


}
