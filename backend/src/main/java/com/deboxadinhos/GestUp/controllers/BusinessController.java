package com.deboxadinhos.GestUp.controllers;

import com.deboxadinhos.GestUp.dto.BusinessDTO;
import com.deboxadinhos.GestUp.dto.CreateBusinessDTO;
import com.deboxadinhos.GestUp.models.Business;
import com.deboxadinhos.GestUp.models.User;
import com.deboxadinhos.GestUp.repository.BusinessRepository;
import com.deboxadinhos.GestUp.repository.UserRepository;
import com.deboxadinhos.GestUp.services.IBusinessService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/business")
public class BusinessController {

    @Autowired
    private IBusinessService businessService;


    @GetMapping("/{id}")
    public ResponseEntity<?> listar_empresas(@PathVariable("id") UUID userid){
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(businessService.findBusinessesByUserId(userid));
    }


    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<?> createBusiness(@RequestBody CreateBusinessDTO business) {
        return ResponseEntity.status(HttpStatus.CREATED).body(businessService.createBusiness(business));
    }

}
