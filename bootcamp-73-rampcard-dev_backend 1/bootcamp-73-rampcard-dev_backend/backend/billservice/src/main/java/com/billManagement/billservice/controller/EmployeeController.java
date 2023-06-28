package com.billManagement.billservice.controller;


import com.billManagement.billservice.dto.EmployeeDto;
import com.billManagement.billservice.entity.Employee;
import com.billManagement.billservice.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


@Controller
@RequestMapping("bill/employees")
@RestController
public class EmployeeController {
	private static final Logger logger = LoggerFactory.getLogger(EmployeeController.class);

	@Autowired
	private EmployeeService employeeService;


	public EmployeeController(EmployeeService theEmployeeService) {
		employeeService = theEmployeeService;
	}


	@GetMapping("/listEmployee")
	public List<EmployeeDto> listEmployees() {
		return employeeService.findAll();
	}

	@PostMapping("/save")
	public String saveEmployee(@RequestBody Employee theEmployee) {
		employeeService.save(theEmployee);
		return "Employee saved";
	}


}