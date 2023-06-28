package com.billManagement.billservice;

import com.billManagement.billservice.controller.BillController;
import com.billManagement.billservice.dto.BillDto;
import com.billManagement.billservice.dto.BillEmployeeFileDto;
import com.billManagement.billservice.dto.BillRequestDto;
import com.billManagement.billservice.entity.Bill;
import com.billManagement.billservice.service.BillService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;


import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


public class BillControllerTests {

	private MockMvc mockMvc;


	@Mock
	private BillService billService;


	@BeforeEach
	void setup() {
		MockitoAnnotations.openMocks(this);
		mockMvc = MockMvcBuilders.standaloneSetup(new BillController(billService)).build();
	}

	@Test
	public void testListBills() throws Exception {
		List<Bill> bill = new ArrayList<>();

		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss");


		LocalDateTime invoiceDate = LocalDateTime.parse("2023-05-15T10:30:00", formatter);
		LocalDateTime dueDate = LocalDateTime.parse("2023-05-15T10:30:00", formatter);
		LocalDateTime createdDate = LocalDateTime.parse("2023-05-15T10:30:00", formatter);
		LocalDateTime updatedDate = LocalDateTime.parse("2023-05-15T10:30:00", formatter);
		Bill bill1 = new Bill(
			1,
			invoiceDate,
			dueDate,
			1200,
			"123456789",
			"Pending",
			createdDate,
			updatedDate,
			"INV-1"
		);

		bill.add(bill1);

		Mockito.when(billService.findAll()).thenReturn(bill.stream().map(this::convertEntityToDto).collect(Collectors.toList()));


		mockMvc.perform(get("/bill/bills/listBills"))
			.andExpect(status().isOk());

	}

	private BillDto convertEntityToDto(Bill bill) {
		BillDto billDto = new BillDto();
		billDto.setId(bill.getId());
		billDto.setInVoiceDate(bill.getInVoiceDate());
		billDto.setInVoiceNumber(bill.getInVoiceNumber());
		billDto.setDueDate(bill.getDueDate());
		billDto.setAmount(bill.getAmount());
		billDto.setAccountNumber(bill.getAccountNumber());
		billDto.setStatus(bill.getStatus());
		billDto.setCreatedDate(bill.getCreatedDate());
		billDto.setUpdatedDate(bill.getUpdatedDate());
		return billDto;
	}


	@Test
	public void testGetAllBillDetails() throws Exception {
		List<BillEmployeeFileDto> billEmployeeFileDtoList = new ArrayList<>();


		Mockito.when(billService.getAllBillDetails()).thenReturn(billEmployeeFileDtoList);


		mockMvc.perform(get("/bill/bills/listBillsEmployeesFiles"))
			.andExpect(status().isOk());
	}

	@Test
	public void testSaveBills() throws Exception {
		Bill theBill = new Bill(); // Create a sample Bill object
		String requestBody = new ObjectMapper().writeValueAsString(theBill);


		mockMvc.perform(post("/bill/bills/save")
			                .contentType(MediaType.APPLICATION_JSON)
			                .content(requestBody))
			.andExpect(status().isOk())
			.andExpect(content().string("Bill saved successfully"));

	}

	@Test
	public void testSaveBillEmployeeFile() throws Exception {
		BillEmployeeFileDto theBill = new BillEmployeeFileDto(); // Create a sample BillEmployeeFileDto object
		String requestBody = new ObjectMapper().writeValueAsString(theBill);

		mockMvc.perform(post("/bill/bills/saveBillEmployeeFile")
			                .contentType(MediaType.APPLICATION_JSON)
			                .content(requestBody))
			.andExpect(status().isOk())
			.andExpect(content().string("Bill Employee and file  saved successfully"));

	}

	@Test
	public void testUpdateBillStatus() throws Exception {
		int id = 1;
		BillRequestDto billStatus = new BillRequestDto();
		String requestBody = new ObjectMapper().writeValueAsString(billStatus);

		BillEmployeeFileDto updatedBill = new BillEmployeeFileDto(); // Create a sample updated BillEmployeeFileDto object
		Mockito.when(billService.updateBill(id, billStatus)).thenReturn(updatedBill);

		mockMvc.perform(patch("/bill/bills/updateBillStatus/{id}", id)
			                .contentType(MediaType.APPLICATION_JSON)
			                .content(requestBody))
			.andExpect(status().isOk());

	}
}
