package com.ramp.accountingservice.service;

import com.ramp.accountingservice.dto.CategoryRuleInput;
import com.ramp.accountingservice.dto.CategoryRuleDto;
import com.ramp.accountingservice.dto.CategoryRuleNamesDto;
import com.ramp.accountingservice.entity.*;
import com.ramp.accountingservice.exception.InvalidQuickBookException;
import com.ramp.accountingservice.exception.InvalidVendorException;
import com.ramp.accountingservice.repository.CategoryRuleRepository;
import com.ramp.accountingservice.repository.QuickBookRepository;
import com.ramp.accountingservice.repository.RampRepository;
import com.ramp.accountingservice.repository.VendorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class CategoryRuleServiceImpl implements CategoryRuleService {


	@Autowired
	private CategoryRuleRepository categoryRuleRepository;

	@Autowired
	private RampRepository rampRepository;
	@Autowired
	private QuickBookRepository quickbookRepository;

	public CategoryRuleServiceImpl
		(CategoryRuleRepository categoryRuleRepository) {
		this.categoryRuleRepository = categoryRuleRepository;
	}


	public List<CategoryRuleDto> findAll() {
		List<CategoryRule> categoryRules = categoryRuleRepository.findAll();
		return categoryRules.stream()
			       .map(this::mapToDTO)
			       .collect(Collectors.toList());
	}


	public Ramp rampValue(List<Ramp> rampList, String rampCategory) {
		for (Ramp ramp : rampList) {
			if (ramp.getRamp().equals(rampCategory)) {
				return ramp;
			}
		}
		return null;

	}

	public void createCategoryRule(String rampCategory, String quickbookCategory) {
		List<Ramp> rampList = rampRepository.findAll();

		Ramp ramp = rampValue(rampList, rampCategory);

		QuickBook quickbook = quickbookRepository.findByName(quickbookCategory);

		CategoryRule categoryRule = new CategoryRule();
		categoryRule.setRamp(ramp);
		categoryRule.setQuickbook(quickbook);

		categoryRuleRepository.save(categoryRule);
	}


	public List<CategoryRuleNamesDto> findAllByName() {

		List<CategoryRule> categoryRules = categoryRuleRepository.findAll();


		return categoryRules.stream()
			       .map(this::mapToNameaDTO)
			       .collect(Collectors.toList());

	}

	private CategoryRuleNamesDto mapToNameaDTO(CategoryRule categoryRule) {
		CategoryRuleNamesDto dto = new CategoryRuleNamesDto();
		dto.setRampCategory(categoryRule.getRamp().getRamp());
		dto.setQuickbookCategory(categoryRule.getQuickbook().getName());
		return dto;
	}

	@Override
	public int count() {
		return (int) categoryRuleRepository.count();

	}

	private CategoryRuleDto mapToDTO(CategoryRule categoryRule) {
		CategoryRuleDto dto = new CategoryRuleDto();
		dto.setId(categoryRule.getId());
		dto.setRamp(categoryRule.getRamp());
		dto.setQuickBook(categoryRule.getQuickbook());
		return dto;
	}

	@Override
	public void save(CategoryRuleInput categoryRuleInput) {

		Ramp ramp = new Ramp();
		ramp.setId(categoryRuleInput.getRampId());

		QuickBook quickbook = new QuickBook();
		quickbook.setId(categoryRuleInput.getQuickbookId());

		CategoryRule thecategoryRule = new CategoryRule();
		thecategoryRule.setRamp(ramp);
		thecategoryRule.setQuickbook(quickbook);


		categoryRuleRepository.save(thecategoryRule);
	}

}
