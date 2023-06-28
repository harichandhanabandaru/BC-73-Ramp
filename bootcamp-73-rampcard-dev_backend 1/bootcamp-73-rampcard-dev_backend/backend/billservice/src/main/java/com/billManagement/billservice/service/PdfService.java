package com.billManagement.billservice.service;

import com.billManagement.billservice.dto.FileDto;
import com.billManagement.billservice.dto.pdfFileExtracts;
import com.billManagement.billservice.entity.File;

import java.util.List;
public interface PdfService {

   pdfFileExtracts extractTextFromPdf(String file);


}