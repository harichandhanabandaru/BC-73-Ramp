package com.billManagement.billservice;

import com.billManagement.billservice.controller.FileController;
import com.billManagement.billservice.entity.File;
import com.billManagement.billservice.service.FileService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;


import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class FileControllerTests {

	private MockMvc mockMvc;

	@Mock
	private FileService fileService;

	@BeforeEach
	void setup() {
		MockitoAnnotations.openMocks(this);
		mockMvc = MockMvcBuilders.standaloneSetup(new FileController(fileService)).build();
	}


	@Test
	public void testSaveFile() throws Exception {
		File file = new File();
		file.setId(1);
		file.setName("Test File");
		String requestBody = new ObjectMapper().writeValueAsString(file);


		mockMvc.perform(post("/bill/file/save")
			                .contentType(MediaType.APPLICATION_JSON)
			                .content(requestBody))
			.andExpect(status().isOk())
			.andExpect(content().string("File saved"));

	}

}
