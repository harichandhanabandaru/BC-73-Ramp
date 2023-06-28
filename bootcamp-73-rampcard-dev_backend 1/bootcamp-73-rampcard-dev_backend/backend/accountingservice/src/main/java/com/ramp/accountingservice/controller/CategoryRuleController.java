package com.ramp.accountingservice.controller;


import com.ramp.accountingservice.dto.CategoryRuleInput;
import com.ramp.accountingservice.dto.CategoryRuleDto;
import com.ramp.accountingservice.dto.CategoryRuleNamesDto;
import com.ramp.accountingservice.entity.MerchantRule;
import com.ramp.accountingservice.service.CategoryRuleService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/accounting/categoryRule")
@RestController
public class CategoryRuleController {

	private static final Logger logger = LoggerFactory.getLogger(TransactionController.class);

	@Autowired
	private CategoryRuleService categoryService;


	public CategoryRuleController
		(CategoryRuleService categoryService) {
		this.categoryService = categoryService;
	}


	@GetMapping("/mapping")
	public List<CategoryRuleNamesDto> listCategroyRuleName() {
		return categoryService.findAllByName();
	}

	@PostMapping("/saveByName")
	public String createCategoryRule(
		@RequestBody CategoryRuleNamesDto categoryRuleNames
	) {
		categoryService.createCategoryRule(categoryRuleNames.getRampCategory(), categoryRuleNames.getQuickbookCategory());
		return "Category rule saved";
	}

	@GetMapping("/CategoryRuleList")
	public List<CategoryRuleDto> listCategroyRule() {
		return categoryService.findAll();
	}

	@PostMapping("/save")
	public String saveCategoryRule(@RequestBody CategoryRuleInput categoryRuleInput) {
		categoryService.save(categoryRuleInput);
		return "categoryRuleDto saved successfully";
	}

	@GetMapping("/count")
	public int categroyRuleCount() {
		return categoryService.count();
	}


}