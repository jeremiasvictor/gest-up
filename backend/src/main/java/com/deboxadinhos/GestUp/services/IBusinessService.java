package com.deboxadinhos.GestUp.services;

import com.deboxadinhos.GestUp.dto.BusinessDTO;
import com.deboxadinhos.GestUp.dto.CreateBusinessDTO;

import java.util.List;
import java.util.UUID;

public interface IBusinessService {
    List<BusinessDTO> findBusinessesByUserId(UUID id);
    BusinessDTO createBusiness(CreateBusinessDTO createBusinessDTO);
}
