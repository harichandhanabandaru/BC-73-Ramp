package com.ramp.accountingservice.service;

import com.ramp.accountingservice.dto.RampDto;
import com.ramp.accountingservice.entity.Ramp;

import java.util.List;

public interface RampService {

	List<RampDto> findAll();

	void save(Ramp ramp);

	List<RampDto> findUnassignedRamp();

}