package com.ramp.accountingservice;

import com.ramp.accountingservice.dto.CategoryRuleDto;
import com.ramp.accountingservice.dto.CategoryRuleInput;
import com.ramp.accountingservice.entity.CategoryRule;
import com.ramp.accountingservice.entity.QuickBook;
import com.ramp.accountingservice.entity.Ramp;
import com.ramp.accountingservice.repository.CategoryRuleRepository;
import com.ramp.accountingservice.service.CategoryRuleServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

public class CategoryRuleServiceTest {

	private CategoryRuleServiceImpl categoryRuleService;

	@Mock
	private CategoryRuleRepository categoryRuleRepository;


	@BeforeEach
	void setup() {
		MockitoAnnotations.openMocks(this);
		categoryRuleService = new CategoryRuleServiceImpl(categoryRuleRepository);
	}

	@Test
	public void findAll() {
		Ramp ramp = new Ramp("ramp");
		QuickBook quickbook = new QuickBook(1, "quickbook");
		List<CategoryRule> categoryRules = new ArrayList<>();
		categoryRules.add(new CategoryRule(1, ramp, quickbook));
		when(categoryRuleRepository.findAll()).thenReturn(categoryRules);

		List<CategoryRuleDto> categoryDto = categoryRuleService.findAll();

		assertEquals(1, categoryDto.size());
		assertEquals("ramp", categoryDto.get(0).getRamp().getRamp());
		assertEquals("quickbook", categoryDto.get(0).getQuickBook().getName());
		verify(categoryRuleRepository, times(1)).findAll();
	}

	@Test
	void count() {

		when(categoryRuleRepository.count()).thenReturn(2L);
		int count = categoryRuleService.count();
		assertEquals(2, count);
		verify(categoryRuleRepository, times(1)).count();


	}


	@Test
	public void save() {

		Ramp ramp = new Ramp();
		ramp.setId(1);
		ramp.setRamp("ramp");

		QuickBook quickbook = new QuickBook();
		quickbook.setId(1);
		quickbook.setName("quickbook");

		CategoryRule thecategoryRule = new CategoryRule();
		thecategoryRule.setRamp(ramp);
		thecategoryRule.setQuickbook(quickbook);
//		categoryRuleRepository.save(thecategoryRule);


		when(categoryRuleRepository.save(thecategoryRule)).thenReturn(thecategoryRule);

		CategoryRuleInput categoryRuleInput = new CategoryRuleInput();
		categoryRuleService.save(categoryRuleInput);

		verify(categoryRuleRepository, times(1)).save(any(CategoryRule.class));

//		assertEquals(1, categoryDto.size());
//        assertEquals("ramp", categoryDto.get(0).getRamp());
//        assertEquals("quickbook", categoryDto.get(0).getQuickbook());
//        verify(categoryRuleRepository, times(1)).findAll();


	}
}
