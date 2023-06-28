package com.ramp.accountingservice;

import com.ramp.accountingservice.controller.CategoryRuleController;
import com.ramp.accountingservice.controller.RampController;
import com.ramp.accountingservice.dto.CategoryRuleDto;
import com.ramp.accountingservice.dto.CategoryRuleInput;
import com.ramp.accountingservice.dto.RampDto;
import com.ramp.accountingservice.entity.CategoryRule;
import com.ramp.accountingservice.entity.QuickBook;
import com.ramp.accountingservice.entity.Ramp;
import com.ramp.accountingservice.service.CategoryRuleService;
import com.ramp.accountingservice.service.RampService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class CategoryRuleControllerTest {

	private MockMvc mockMvc;

	@Mock
	private CategoryRuleService categoryRuleService;

	@BeforeEach
	void setup() {
		MockitoAnnotations.openMocks(this);
		mockMvc = MockMvcBuilders.standaloneSetup(new CategoryRuleController(categoryRuleService)).build();
	}

	@Test
	void testListCategroyRuleTest() throws Exception {
		Ramp ramp = new Ramp("ramp");
		QuickBook quickbook = new QuickBook(1, "quickbook");
		Ramp rampTest = new Ramp("rampTest");
		QuickBook quickbookTest = new QuickBook(1, "quickbookTest");
		List<CategoryRuleDto> categoryRules = new ArrayList<>();
		categoryRules.add(new CategoryRuleDto(1, ramp, quickbook));
		categoryRules.add(new CategoryRuleDto(2, rampTest, quickbookTest));


		when(categoryRuleService.findAll()).thenReturn(categoryRules);

		MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.get("/categoryRule/CategoryRuleList"))
			                      .andExpect(status().isOk())
			                      .andExpect(content().contentType(MediaType.APPLICATION_JSON))
			                      .andReturn();

		verify(categoryRuleService, times(1)).findAll();
		String responseContent = mvcResult.getResponse().getContentAsString();
	}

	@Test
	void saveCategoryRuleTest() throws Exception {

		Ramp ramp = new Ramp("ramp");
		QuickBook quickbook = new QuickBook(1, "quickbook");


		CategoryRuleInput categoryRuleInput = new CategoryRuleInput();
		categoryRuleInput.setRampId(ramp.getId());
		categoryRuleInput.setQuickbookId(quickbook.getId());

		categoryRuleService.save(categoryRuleInput);

//		MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.post("/categoryRule/save"))
//			                      .andExpect(status().isOk())
//			                      .andExpect(content().contentType(MediaType.APPLICATION_JSON))
//			                      .andReturn();

		mockMvc.perform(MockMvcRequestBuilders.post("/categoryRule/save")
			                .contentType(MediaType.APPLICATION_JSON)
			                .content("{\n" +
				                         "    \"rampId\":1,\n" +
				                         "    \"quickbookId\":1\n" +
				                         "}"))
			.andExpect(status().isOk())
			.andReturn();


		verify(categoryRuleService, times(1)).save(categoryRuleInput);
//		String responseContent = mvcResult.getResponse().getContentAsString();

	}

	@Test
	void categroyRuleCountTest() throws Exception {
		when(categoryRuleService.count()).thenReturn(1);

		MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.get("/categoryRule/count"))
			                      .andExpect(status().isOk())
			                      .andExpect(content().contentType(MediaType.APPLICATION_JSON))
			                      .andReturn();
		verify(categoryRuleService, times(1)).count();


	}
}
