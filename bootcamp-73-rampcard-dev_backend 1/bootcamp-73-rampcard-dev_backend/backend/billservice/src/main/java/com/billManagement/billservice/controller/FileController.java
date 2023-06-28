package com.billManagement.billservice.controller;

import com.billManagement.billservice.dto.EmployeeDto;
import com.billManagement.billservice.dto.FileDto;
import com.billManagement.billservice.entity.Employee;
import com.billManagement.billservice.entity.File;
import com.billManagement.billservice.service.EmployeeService;
import com.billManagement.billservice.service.FileService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@Controller
@RequestMapping("bill/file")
@RestController
public class FileController {
	private static final Logger logger = LoggerFactory.getLogger(EmployeeController.class);


	@Autowired
	private FileService fileService;


	public FileController(FileService theFileService) {
		fileService = theFileService;
	}


	@GetMapping("/listFiles")
	public List<FileDto> listFiles() {
		return fileService.findAll();
	}

	@PostMapping("/save")
	public String saveFile(@RequestBody File theFile) {
		fileService.save(theFile);
		return "File saved";
	}


}