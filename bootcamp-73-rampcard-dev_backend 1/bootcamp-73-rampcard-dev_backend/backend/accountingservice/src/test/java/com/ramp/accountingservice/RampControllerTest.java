package com.ramp.accountingservice;

import com.ramp.accountingservice.controller.RampController;
import com.ramp.accountingservice.dto.RampDto;
import com.ramp.accountingservice.entity.Ramp;
import com.ramp.accountingservice.service.RampService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentCaptor;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

class RampControllerTest {

	private MockMvc mockMvc;

	@Mock
	private RampService rampService;

	@BeforeEach
	void setup() {
		MockitoAnnotations.openMocks(this);
		mockMvc = MockMvcBuilders.standaloneSetup(new RampController(rampService)).build();
	}

	@Test
	void testListRamps() throws Exception {
		List<RampDto> ramps = new ArrayList<>();
		RampDto rampDto = new RampDto();
		rampDto.setId(1);
		rampDto.setRamp("ramp1");

		RampDto rampDtoTest = new RampDto();
		rampDtoTest.setId(1);
		rampDtoTest.setRamp("ramp2");

		ramps.add(rampDto);
		ramps.add(rampDtoTest);
		when(rampService.findAll()).thenReturn(ramps);

		MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.get("/ramp/rampsList"))
			                      .andExpect(status().isOk())
			                      .andExpect(content().contentType(MediaType.APPLICATION_JSON))
			                      .andReturn();

		verify(rampService, times(1)).findAll();
		String responseContent = mvcResult.getResponse().getContentAsString();
	}

	@Test
	void testSaveRamps() throws Exception {
		Ramp ramp = new Ramp();
		ramp.setRamp("Ramp 1");

		ArgumentCaptor<Ramp> rampCaptor = ArgumentCaptor.forClass(Ramp.class);

		mockMvc.perform(MockMvcRequestBuilders.post("/ramp/save")
			                .contentType(MediaType.APPLICATION_JSON)
			                .content("{\"ramp\": \"Ramp 1\"}"))
			.andExpect(status().isOk())
			.andReturn();

		verify(rampService, times(1)).save(rampCaptor.capture());

		Ramp capturedRamp = rampCaptor.getValue();

		assertEquals(ramp.getRamp(), capturedRamp.getRamp());
	}

	@Test
	void testUnassignedRamps() throws Exception {
		List<RampDto> unassignedRamps = new ArrayList<>();
		unassignedRamps.add(new RampDto());
		when(rampService.findUnassignedRamp()).thenReturn(unassignedRamps);

		MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.get("/ramp/unassignedRamps"))
			                      .andExpect(status().isOk())
			                      .andExpect(content().contentType(MediaType.APPLICATION_JSON))
			                      .andReturn();

		verify(rampService, times(1)).findUnassignedRamp();
		String responseContent = mvcResult.getResponse().getContentAsString();
	}


}
