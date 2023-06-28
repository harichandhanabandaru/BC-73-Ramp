package com.billManagement.billservice;

import com.billManagement.billservice.dto.FileDto;
import com.billManagement.billservice.entity.File;
import com.billManagement.billservice.repository.FileRepository;
import com.billManagement.billservice.service.FileService;
import com.billManagement.billservice.service.FileServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

public class FileServiceImplTest {

	private FileService fileService;

	@Mock
	private FileRepository fileRepository;

	@BeforeEach
	public void setup() {
		MockitoAnnotations.initMocks(this);
		fileService = new FileServiceImpl(fileRepository);
	}

	@Test
	public void testFindAll() {
		File file1 = new File();
		file1.setId(1);
		file1.setType("txt");

		File file2 = new File();
		file2.setId(2);
		file2.setType("pdf");

		List<File> files = Arrays.asList(file1, file2);

		when(fileRepository.findAll()).thenReturn(files);

		List<FileDto> fileDtos = fileService.findAll();

		assertEquals(2, fileDtos.size());

		verify(fileRepository, times(1)).findAll();
	}

	@Test
	public void testSave() {
		File file = new File();

		fileService.save(file);

		verify(fileRepository, times(1)).save(file);
	}
}
