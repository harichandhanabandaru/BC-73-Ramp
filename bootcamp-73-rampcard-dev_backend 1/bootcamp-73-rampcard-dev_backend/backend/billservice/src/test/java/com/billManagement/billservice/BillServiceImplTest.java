package com.billManagement.billservice;

import com.billManagement.billservice.dto.BillDto;
import com.billManagement.billservice.dto.BillEmployeeFileDto;
import com.billManagement.billservice.dto.BillRequestDto;
import com.billManagement.billservice.entity.Bill;
import com.billManagement.billservice.entity.Employee;
import com.billManagement.billservice.entity.File;
import com.billManagement.billservice.repository.BillRepository;
import com.billManagement.billservice.repository.EmployeeRepository;
import com.billManagement.billservice.repository.FileRepository;
import com.billManagement.billservice.service.BillService;
import com.billManagement.billservice.service.BillServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.data.domain.Sort;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

public class BillServiceImplTest {

	private BillService billService;

	@Mock
	private BillRepository billRepository;

	@Mock
	private EmployeeRepository employeeRepository;

	@Mock
	private FileRepository fileRepository;


	@BeforeEach
	public void setup() {
		MockitoAnnotations.initMocks(this);
		billService = new BillServiceImpl(billRepository);
	}

	@Test
	public void testFindAll() {
		List<Bill> billList = new ArrayList<>();
		billList.add(createMockBill(1));
		billList.add(createMockBill(2));
		when(billRepository.findAll()).thenReturn(billList);

		List<BillDto> billDtoList = billService.findAll();


		assertEquals(2, billDtoList.size());
		verify(billRepository, times(1)).findAll();
	}

	@Test
	public void testGetAllBillDetails() {

		List<Bill> bills = new ArrayList<>();
		bills.add(createMockBill(1));
		bills.add(createMockBill(2));
		when(billRepository.findAll(Sort.by(Sort.Direction.DESC, "id"))).thenReturn(bills);

		Employee employee1 = createMockEmployee(1);
		Employee employee2 = createMockEmployee(2);
		when(employeeRepository.findById(1)).thenReturn(Optional.of(employee1));
		when(employeeRepository.findById(2)).thenReturn(Optional.of(employee2));

		File file1 = createMockFile(1);
		File file2 = createMockFile(2);
		when(fileRepository.findById(1)).thenReturn(Optional.of(file1));
		when(fileRepository.findById(2)).thenReturn(Optional.of(file2));

		BillEmployeeFileDto billEmployeeFileDto = new BillEmployeeFileDto();
		billEmployeeFileDto.setFile(file1);
		billEmployeeFileDto.setEmployee(employee1);

	}

	@Test
	public void testUpdateBill() {

		int id = 1;
		BillRequestDto billStatus = new BillRequestDto();
		billStatus.setStatus("Paid");

		Bill bill = createMockBill(1);
		when(billRepository.findById(id)).thenReturn(bill);
	}

	@Test
	public void testSaveBillEmployee() {

		BillEmployeeFileDto billDto = createMockBillEmployeeFileDto();
		Employee employee = createMockEmployee(1);
		when(employeeRepository.findByEmployeeId(billDto.getEmployeeId())).thenReturn(null);
		when(employeeRepository.save(any(Employee.class))).thenReturn(employee);

		File file = createMockFile(1);
		when(fileRepository.save(any(File.class))).thenReturn(file);

		Bill bill = createMockBill(1);
		when(billRepository.save(any(Bill.class))).thenReturn(bill);

	}

	private Bill createMockBill(int id) {
		Bill bill = new Bill();
		bill.setId(id);
		return bill;
	}

	private Employee createMockEmployee(int id) {
		Employee employee = new Employee();
		employee.setId(id);
		return employee;
	}

	private File createMockFile(int id) {
		File file = new File();
		file.setId(id);
		return file;
	}

	private BillEmployeeFileDto createMockBillEmployeeFileDto() {
		BillEmployeeFileDto billDto = new BillEmployeeFileDto();
		return billDto;
	}
}
