package com.billManagement.billservice.repository;


import com.billManagement.billservice.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

	Employee findByEmployeeId(String employeeId);


}