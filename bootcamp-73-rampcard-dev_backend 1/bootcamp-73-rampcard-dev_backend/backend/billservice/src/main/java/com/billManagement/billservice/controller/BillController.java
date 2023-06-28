package com.billManagement.billservice.controller;


import com.billManagement.billservice.dto.BillDto;
import com.billManagement.billservice.dto.BillEmployeeFileDto;
import com.billManagement.billservice.dto.BillRequestDto;
import com.billManagement.billservice.entity.Bill;
import com.billManagement.billservice.service.BillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;




@Controller
@RequestMapping("bill/bills")
@RestController
public class BillController {
	private static final Logger logger = LoggerFactory.getLogger(BillController.class);
	@Autowired
		private BillService billService;


	public BillController(BillService theBillService) {
		billService = theBillService;
	}


	@GetMapping("/listBills")
	public List<BillDto> listBills() {
		return billService.findAll();
	}


	@GetMapping("/listBillsEmployeesFiles")
	public List<BillEmployeeFileDto> getAllBillDetails() {
		return billService.getAllBillDetails();
	}

	@PostMapping("/save")
	public String saveBills(@RequestBody Bill theBill) {

		billService.save(theBill);

		return "Bill saved successfully";
	}

	@PostMapping("/saveBillEmployeeFile")
	public String saveBills(@RequestBody BillEmployeeFileDto theBill) {


		billService.saveBillEmployee(theBill);

		return "Bill Employee and file  saved successfully";
	}

	@PatchMapping("/updateBillStatus/{id}")
   public BillEmployeeFileDto updateBill(@PathVariable int id, @RequestBody BillRequestDto billStatus) {
       return billService.updateBill(id, billStatus);
   }


}