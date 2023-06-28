package com.billManagement.billservice.repository;

import com.billManagement.billservice.entity.Bill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface BillRepository extends JpaRepository<Bill, Integer> {

	@Query("SELECT b, e FROM Bill b LEFT JOIN b.employee e")
	List<Bill> findAllBillsWithEmployee();

	Bill findById(int id);


}