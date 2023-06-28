package com.ramp.accountingservice.service;


import com.ramp.accountingservice.dto.CategoryRuleInput;
import com.ramp.accountingservice.dto.CategoryRuleDto;
import com.ramp.accountingservice.dto.CategoryRuleNamesDto;

import java.util.List;

public interface CategoryRuleService {

	List<CategoryRuleDto> findAll();


	int count();

	void save(CategoryRuleInput categoryRuleInput);

	List<CategoryRuleNamesDto> findAllByName();

	void createCategoryRule(String rampCategory, String quickbookCategory);
}

