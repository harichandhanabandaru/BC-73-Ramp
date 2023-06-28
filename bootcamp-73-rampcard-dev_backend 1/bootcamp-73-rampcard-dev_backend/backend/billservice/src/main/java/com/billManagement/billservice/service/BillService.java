package com.billManagement.billservice.service;


import com.billManagement.billservice.dto.BillDto;
import com.billManagement.billservice.dto.BillEmployeeFileDto;
import com.billManagement.billservice.dto.BillRequestDto;
import com.billManagement.billservice.entity.Bill;

import java.util.List;

public interface BillService {

	List<BillDto> findAll();

	void save(Bill theBill);

	void saveBillEmployee(BillEmployeeFileDto theBill);

	List<BillEmployeeFileDto> getAllBillDetails();

	BillEmployeeFileDto updateBill(int id, BillRequestDto billStatus);


}