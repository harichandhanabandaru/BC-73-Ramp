package com.ramp.accountingservice;//package com.ramp.accountingservice;


import com.ramp.accountingservice.dto.RampDto;
import com.ramp.accountingservice.entity.Ramp;
import com.ramp.accountingservice.repository.RampRepository;
import com.ramp.accountingservice.service.RampServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class RampServiceTest {

	private RampServiceImpl rampService;

	@Mock
	private RampRepository rampRepository;

	@BeforeEach
	void setup() {
		MockitoAnnotations.openMocks(this);
		rampService = new RampServiceImpl(rampRepository);
	}

	@Test
	void testFindAll() {
		List<Ramp> ramps = new ArrayList<>();
		ramps.add(new Ramp("Ramp 1"));
		ramps.add(new Ramp("Ramp 2"));
		when(rampRepository.findAll()).thenReturn(ramps);

		List<RampDto> rampDtos = rampService.findAll();


		assertEquals(2, rampDtos.size());
		assertEquals("Ramp 1", rampDtos.get(0).getRamp());
		assertEquals("Ramp 2", rampDtos.get(1).getRamp());
		verify(rampRepository, times(1)).findAll();
	}

	@Test
	void testSave() {
		Ramp ramp = new Ramp("Ramp 1");

		rampService.save(ramp);

		verify(rampRepository, times(1)).save(ramp);
	}

	@Test
	void testFindUnassignedRamp() {

		List<Ramp> unassignedRamps = new ArrayList<>();
		unassignedRamps.add(new Ramp("Ramp 1"));
		when(rampRepository.findRampsNotInCategoryRule()).thenReturn(unassignedRamps);

		List<RampDto> rampDtos = rampService.findUnassignedRamp();

		assertEquals(1, rampDtos.size());
		assertEquals("Ramp 1", rampDtos.get(0).getRamp());
		verify(rampRepository, times(1)).findRampsNotInCategoryRule();
	}
}
