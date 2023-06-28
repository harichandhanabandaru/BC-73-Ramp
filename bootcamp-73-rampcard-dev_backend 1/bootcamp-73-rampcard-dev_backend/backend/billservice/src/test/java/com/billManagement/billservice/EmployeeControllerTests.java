package com.billManagement.billservice;

import com.billManagement.billservice.controller.EmployeeController;
import com.billManagement.billservice.dto.EmployeeDto;
import com.billManagement.billservice.entity.Employee;
import com.billManagement.billservice.service.EmployeeService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;


public class EmployeeControllerTests {

	private MockMvc mockMvc;

	@Mock
	private EmployeeService employeeService;


	@BeforeEach
	public void setup() {
		MockitoAnnotations.openMocks(this);
		EmployeeController employeeController = new EmployeeController(employeeService);
		this.mockMvc = MockMvcBuilders.standaloneSetup(employeeController).build();
	}

	@Test
	public void testListEmployees() throws Exception {
		List<EmployeeDto> employeeDtoList = new ArrayList<>();
		when(employeeService.findAll()).thenReturn(employeeDtoList);

		mockMvc.perform(MockMvcRequestBuilders.get("/bill/employees/listEmployee"))
			.andExpect(status().isOk())
			.andExpect(content().contentType(MediaType.APPLICATION_JSON))
			.andExpect(jsonPath("$").isArray())
			.andExpect(jsonPath("$").isEmpty());

		verify(employeeService, times(1)).findAll();
	}

	@Test
	public void testSaveEmployee() throws Exception {
		Employee employee = new Employee();
		employee.setId(1);
		employee.setName("John Doe");

		employeeService.save(employee);

		MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.post("/bill/employees/save")
			                                      .contentType(MediaType.APPLICATION_JSON)
			                                      .content("{\"id\": 1, \"name\": \"John Doe\"}"))
			                      .andExpect(status().isOk())
			                      .andReturn();

		verify(employeeService, times(1)).save(eq(employee));

		String responseContent = mvcResult.getResponse().getContentAsString();
		assertEquals("Employee saved", responseContent);
	}


}
