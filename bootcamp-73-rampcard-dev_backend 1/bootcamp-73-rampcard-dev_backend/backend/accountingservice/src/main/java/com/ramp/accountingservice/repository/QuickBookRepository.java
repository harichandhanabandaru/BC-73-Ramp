package com.ramp.accountingservice.repository;

import com.ramp.accountingservice.entity.QuickBook;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuickBookRepository extends JpaRepository<QuickBook, Integer> {
    QuickBook findByName(String name);
}
