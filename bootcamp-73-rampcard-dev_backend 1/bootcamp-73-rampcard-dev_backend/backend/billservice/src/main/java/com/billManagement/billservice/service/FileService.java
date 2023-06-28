package com.billManagement.billservice.service;

import com.billManagement.billservice.dto.FileDto;
import com.billManagement.billservice.entity.File;


import java.util.List;

public interface FileService {

	List<FileDto> findAll();

	void save(File theFile);


}