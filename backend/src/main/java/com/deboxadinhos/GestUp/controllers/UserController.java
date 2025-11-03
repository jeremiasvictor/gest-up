package com.deboxadinhos.GestUp.controllers;

import com.deboxadinhos.GestUp.dto.CreateUserDTO;
import com.deboxadinhos.GestUp.models.BaseUser;
import com.deboxadinhos.GestUp.services.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    @Autowired
    private IUserService userService;

    @GetMapping
    public List<BaseUser> list(){
        return userService.findAll();
    }

    @PostMapping
    public ResponseEntity<?> registerUser(@RequestBody CreateUserDTO user){
        return ResponseEntity.status(HttpStatus.CREATED).body(userService.doRegister(user));
    }

    // Recebe a resposta do front end e cria um objeto usuario
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody CreateUserDTO user){
            return ResponseEntity.status(HttpStatus.ACCEPTED).body(userService.doLogin(user));
    }

}
