package com.deboxadinhos.GestUp.services;

import com.deboxadinhos.GestUp.dto.BusinessDTO;
import com.deboxadinhos.GestUp.dto.CreateBusinessDTO;
import com.deboxadinhos.GestUp.dto.IdOperationsDTO;

import java.util.List;
import java.util.UUID;

public interface IBusinessService {
    List<BusinessDTO> findBusinessesByUserId(UUID id);
    BusinessDTO createBusiness(CreateBusinessDTO createBusinessDTO);
    void deleteBusiness(UUID id);
}
