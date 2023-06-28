package com.ramp.accountingservice.repository;

import com.ramp.accountingservice.entity.CategoryRule;
import com.ramp.accountingservice.entity.QuickBook;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRuleRepository extends JpaRepository<CategoryRule, Integer> {
}
