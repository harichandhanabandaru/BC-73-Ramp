package com.ramp.accountingservice.repository;

import com.ramp.accountingservice.entity.Ramp;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface RampRepository extends JpaRepository<Ramp, Integer> {
	@Query("SELECT r FROM Ramp r LEFT JOIN CategoryRule cr ON r.id = cr.ramp.id WHERE cr.id IS NULL")
	public List<Ramp> findRampsNotInCategoryRule();




}
