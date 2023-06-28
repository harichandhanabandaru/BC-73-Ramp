package com.billManagement.billservice.service;


import com.billManagement.billservice.dto.EmployeeDto;
import com.billManagement.billservice.entity.Employee;

import java.util.List;

public interface EmployeeService {

	List<EmployeeDto> findAll();

	void save(Employee theEmployee);

}