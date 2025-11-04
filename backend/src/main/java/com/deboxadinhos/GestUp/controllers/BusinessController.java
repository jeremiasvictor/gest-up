package com.deboxadinhos.GestUp.controllers;

import com.deboxadinhos.GestUp.dto.CreateBusinessDTO;
import com.deboxadinhos.GestUp.dto.IdOperationsDTO;
import com.deboxadinhos.GestUp.services.IBusinessService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;
@RestController
@RequestMapping("/business")
@CrossOrigin(origins = "http://localhost:5173")
public class BusinessController {

    @Autowired
    private IBusinessService businessService;


    @GetMapping("/{id}")
    public ResponseEntity<?> businessList(@PathVariable("id") UUID userid){
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(businessService.findBusinessesByUserId(userid));
    }

    @PostMapping
    public ResponseEntity<?> createBusiness(@RequestBody CreateBusinessDTO business) {
        return ResponseEntity.status(HttpStatus.CREATED).body(businessService.createBusiness(business));
    }

    @DeleteMapping
    public ResponseEntity<?> deleteBusiness(@RequestBody IdOperationsDTO businessId){
        businessService.deleteBusiness(businessId.getId());
        return ResponseEntity.status(HttpStatus.OK).body("Business deleted");
    }
}
