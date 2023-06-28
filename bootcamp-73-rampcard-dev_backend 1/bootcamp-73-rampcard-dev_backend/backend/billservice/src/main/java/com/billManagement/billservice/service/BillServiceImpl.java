package com.billManagement.billservice.service;

import com.billManagement.billservice.dto.BillDto;
import com.billManagement.billservice.dto.BillEmployeeFileDto;
import com.billManagement.billservice.dto.BillRequestDto;
import com.billManagement.billservice.entity.Bill;
import com.billManagement.billservice.entity.Employee;
import com.billManagement.billservice.entity.File;
import com.billManagement.billservice.repository.BillRepository;
import com.billManagement.billservice.repository.EmployeeRepository;
import com.billManagement.billservice.repository.FileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class BillServiceImpl implements BillService {

	private BillRepository billRepository;

	@Autowired
	private EmployeeRepository employeeRepository;

	@Autowired
	private FileRepository fileRepository;


	@Autowired
	public BillServiceImpl(BillRepository theBillRepository) {
		billRepository = theBillRepository;
	}

	@Override
	public List<BillDto> findAll() {
		return billRepository.findAll().stream().map(this::convertEntityToDto).collect(Collectors.toList());

	}

	@Override
	public void save(Bill theBill) {
		billRepository.save(theBill);
	}

	@Override
	public List<BillEmployeeFileDto> getAllBillDetails() {
		List<Bill> bills = billRepository.findAll(Sort.by(Sort.Direction.DESC, "id"));
		List<BillEmployeeFileDto> billDetailsList = new ArrayList<>();

		for (Bill bill : bills) {
			Employee employee = employeeRepository.findById(bill.getEmployee().getId()).orElse(null);
			File file = fileRepository.findById(bill.getFile().getId()).orElse(null);

			if (employee != null) {
				BillEmployeeFileDto billDetails = new BillEmployeeFileDto();
				billDetails.setBill(bill);
				billDetails.setEmployee(employee);
				billDetails.setFile(file);
				billDetailsList.add(billDetails);
			}
		}

		return billDetailsList;
	}

	@Override
	public BillEmployeeFileDto updateBill(int id, BillRequestDto billStatus) {
	Bill bill = billRepository.findById(id);

	bill.setStatus(billStatus.getStatus());
	billRepository.save(bill);

	Employee employee = employeeRepository.findById(bill.getEmployee().getId()).orElse(null);
	File file = fileRepository.findById(bill.getFile().getId()).orElse(null);
	BillEmployeeFileDto billDetails = new BillEmployeeFileDto();
	billDetails.setBill(bill);
	billDetails.setEmployee(employee);
	billDetails.setFile(file);

	return billDetails;
	}


	@Override
	public void saveBillEmployee(BillEmployeeFileDto billDto) {
		Employee employee = employeeRepository.findByEmployeeId(billDto.getEmployeeId());

		if (employee == null) {
			employee = new Employee();
			employee.setEmployeeId(billDto.getEmployeeId());
			employee.setName(billDto.getName());
			employee.setEmail(billDto.getEmail());
			employee.setContact(billDto.getContact());
			employee.setJoiningDate(billDto.getJoiningDate());
			employee.setCreatedDate(billDto.getCreatedEmployeeDate());
			employee.setUpdatedDate(billDto.getUpdatedEmployeeDate());
			employeeRepository.save(employee);
		}

		File file = new File();
		file.setName(billDto.getFileName());
		file.setType(billDto.getType());
		file.setData(billDto.getData());
		file.setCreatedDate(billDto.getCreatedFileDate());
		file.setUpdatedDate(billDto.getUpdatedFileDate());
		fileRepository.save(file);

		Bill bill = new Bill();
		bill.setInVoiceDate(billDto.getInVoiceDate());
		bill.setInVoiceNumber(billDto.getInVoiceNumber());
		bill.setDueDate(billDto.getDueDate());
		bill.setAmount(billDto.getAmount());
		bill.setAccountNumber(billDto.getAccountNumber());
		bill.setStatus(billDto.getStatus());
		bill.setCreatedDate(billDto.getCreatedDate());
		bill.setUpdatedDate(billDto.getUpdatedDate());


		List<Bill> billList = new ArrayList<>();
		billList.add(bill);

		bill.setEmployee(employee);
		bill.setFile(file);

		billRepository.save(bill);
	}


	private Bill convertDtoToEntity(BillDto billDto) {
		Bill bill = new Bill();
		bill.setId(billDto.getId());
		bill.setInVoiceDate(billDto.getInVoiceDate());
		bill.setInVoiceNumber(billDto.getInVoiceNumber());
		bill.setDueDate(billDto.getDueDate());
		bill.setAmount(billDto.getAmount());
		bill.setAccountNumber(billDto.getAccountNumber());
		bill.setStatus(billDto.getStatus());
		bill.setCreatedDate(billDto.getCreatedDate());
		bill.setUpdatedDate(billDto.getUpdatedDate());
		return bill;
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
}
