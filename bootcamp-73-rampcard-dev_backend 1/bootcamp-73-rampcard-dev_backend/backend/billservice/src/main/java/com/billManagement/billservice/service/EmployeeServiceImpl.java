package com.billManagement.billservice.service;

import com.billManagement.billservice.dto.EmployeeDto;
import com.billManagement.billservice.entity.Employee;
import com.billManagement.billservice.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EmployeeServiceImpl implements EmployeeService {

	private EmployeeRepository employeeRepository;

	@Autowired
	public EmployeeServiceImpl(EmployeeRepository theEmployeeRepository) {
		employeeRepository = theEmployeeRepository;
	}

	@Override
	public List<EmployeeDto> findAll() {
		return employeeRepository.findAll().stream().map(this::convertEntityToDto).collect(Collectors.toList());
	}

	@Override
	public void save(Employee theEmployee) {
		employeeRepository.save(theEmployee);
	}

	private EmployeeDto convertEntityToDto(Employee employee) {
		EmployeeDto employeeDto = new EmployeeDto();
		employeeDto.setId(employee.getId());
		employeeDto.setEmployeeId(employee.getEmployeeId());
		employeeDto.setName(employee.getName());
		employeeDto.setEmail(employee.getEmail());
		employeeDto.setContact(employee.getContact());
		employeeDto.setJoiningDate(employee.getJoiningDate());
		employeeDto.setCreatedDate(employee.getCreatedDate());
		employeeDto.setUpdatedDate(employee.getUpdatedDate());

		return employeeDto;
	}
}
