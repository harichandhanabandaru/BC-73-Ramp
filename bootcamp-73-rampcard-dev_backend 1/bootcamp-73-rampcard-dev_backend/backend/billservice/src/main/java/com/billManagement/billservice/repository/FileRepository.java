package com.billManagement.billservice.repository;


import com.billManagement.billservice.entity.Employee;
import com.billManagement.billservice.entity.File;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FileRepository extends JpaRepository<File, Integer> {


}