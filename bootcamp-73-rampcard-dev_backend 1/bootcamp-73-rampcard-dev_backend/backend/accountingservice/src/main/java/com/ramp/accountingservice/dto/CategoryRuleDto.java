package com.ramp.accountingservice.dto;

import com.ramp.accountingservice.entity.Ramp;
import com.ramp.accountingservice.entity.QuickBook;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CategoryRuleDto {

    private int id;
    private Ramp ramp;
    private QuickBook quickBook;


}
