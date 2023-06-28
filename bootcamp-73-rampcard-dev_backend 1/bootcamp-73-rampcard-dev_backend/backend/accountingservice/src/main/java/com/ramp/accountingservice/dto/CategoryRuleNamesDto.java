package com.ramp.accountingservice.dto;

import com.ramp.accountingservice.entity.QuickBook;
import com.ramp.accountingservice.entity.Ramp;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;




@Data
@NoArgsConstructor
@AllArgsConstructor
public class CategoryRuleNamesDto {


    private String rampCategory;
    private String quickbookCategory;


}