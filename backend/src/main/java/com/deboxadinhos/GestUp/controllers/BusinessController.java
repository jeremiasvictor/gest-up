package com.deboxadinhos.GestUp.controllers;

import com.deboxadinhos.GestUp.models.Business;
import com.deboxadinhos.GestUp.models.User;
import com.deboxadinhos.GestUp.repository.BusinessRepository;
import com.deboxadinhos.GestUp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.UUID;

@RestController
@RequestMapping("/business")
public class BusinessController {

    @Autowired
    private BusinessRepository businessRepository;

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/{id}")
    public Business listar_empresa(@PathVariable("id") UUID id){
        return businessRepository.findByColumn(id);
    }

//    @PostMapping
//    public Empresa create(@RequestBody Empresa empresa ){
//        return empresaRepository.save(empresa);
//    }
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Business createBusiness(@RequestBody Business business) {

        UUID userId = business.getUser().getId();

        User user = userRepository.findById(userId)
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "User not found with: " + userId));

        business.setUser(user);

        return businessRepository.save(business);
    }

}
