package com.ramp.accountingservice.service;

import com.ramp.accountingservice.dto.RampDto;
import com.ramp.accountingservice.entity.Ramp;
import com.ramp.accountingservice.repository.RampRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class RampServiceImpl implements RampService {


	@Autowired
	private RampRepository rampRepository;

	public RampServiceImpl(RampRepository rampRepository) {
		this.rampRepository = rampRepository;
	}

	@Override
	public List<RampDto> findAll() {
		return rampRepository.findAll().stream().map(this::convertEntityToDto).collect(Collectors.toList());

	}

	@Override
	public void save(Ramp ramp) {
		rampRepository.save(ramp);
	}

	@Override
	public List<RampDto> findUnassignedRamp() {
		return rampRepository.findRampsNotInCategoryRule().stream().map(this::convertEntityToDto).collect(Collectors.toList());
	}

	private RampDto convertEntityToDto(Ramp ramp) {
		RampDto rampDto = new RampDto();
		rampDto.setId(ramp.getId());
		rampDto.setRamp(ramp.getRamp());


		return rampDto;
	}
}

