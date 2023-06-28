package com.billManagement.billservice.service;


import com.billManagement.billservice.dto.EmployeeDto;
import com.billManagement.billservice.dto.FileDto;
import com.billManagement.billservice.entity.Employee;
import com.billManagement.billservice.entity.File;
import com.billManagement.billservice.repository.EmployeeRepository;
import com.billManagement.billservice.repository.FileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Blob;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class FileServiceImpl implements FileService {

	private FileRepository fileRepository;

	@Autowired
	public FileServiceImpl(FileRepository theFileRepository) {
		fileRepository = theFileRepository;
	}

	@Override
	public List<FileDto> findAll() {
		return fileRepository.findAll().stream().map(this::convertEntityToDto).collect(Collectors.toList());
	}

	@Override
	public void save(File theFile) {
		fileRepository.save(theFile);
	}

	private FileDto convertEntityToDto(File file) {
		FileDto fileDto = new FileDto();
		fileDto.setId(file.getId());
		fileDto.setType(file.getType());
		fileDto.setName(file.getName());
		fileDto.setData(file.getData());
		fileDto.setCreatedDate(file.getCreatedDate());
		fileDto.setUpdatedDate(file.getUpdatedDate());

		return fileDto;
	}
}
