package com.billManagement.billservice;

import com.billManagement.billservice.dto.EmployeeDto;
import com.billManagement.billservice.entity.Employee;
import com.billManagement.billservice.repository.EmployeeRepository;
import com.billManagement.billservice.service.EmployeeService;
import com.billManagement.billservice.service.EmployeeServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

public class EmployeeServiceImplTest {

	private EmployeeService employeeService;

	@Mock
	private EmployeeRepository employeeRepository;

	@BeforeEach
	public void setup() {
		MockitoAnnotations.initMocks(this);
		employeeService = new EmployeeServiceImpl(employeeRepository);
	}

	@Test
	public void testFindAll() {
		Employee employee1 = new Employee();
		employee1.setId(1);
		employee1.setEmployeeId("EMP001");

		Employee employee2 = new Employee();
		employee2.setId(2);
		employee2.setEmployeeId("EMP002");

		List<Employee> employees = Arrays.asList(employee1, employee2);

		when(employeeRepository.findAll()).thenReturn(employees);

		List<EmployeeDto> employeeDtos = employeeService.findAll();

		assertEquals(2, employeeDtos.size());

		verify(employeeRepository, times(1)).findAll();
	}

	@Test
	public void testSave() {
		Employee employee = new Employee();

		employeeService.save(employee);
		verify(employeeRepository, times(1)).save(employee);
	}
}
