package com.ramp.accountingservice.controller;

import com.ramp.accountingservice.dto.RampDto;
import com.ramp.accountingservice.entity.Ramp;
import com.ramp.accountingservice.service.RampService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/accounting/ramp")
@RestController
public class RampController {

	private static final Logger logger = LoggerFactory.getLogger(TransactionController.class);

	@Autowired
	private RampService rampService;

	public RampController
		(RampService rampService) {
		this.rampService =rampService;
	}



	@GetMapping("/rampsList")
	public List<RampDto> listRamps() {
		return rampService.findAll();
	}

	@PostMapping("/save")
	public String saveRamps(@RequestBody Ramp ramp) {
		rampService.save(ramp);
		return "Ramp saved successfully";
	}

	@GetMapping("/unassignedRamps")
	public List<RampDto> unassignedRamps() {
		return rampService.findUnassignedRamp();
	}


}