package com.deboxadinhos.GestUp.controllers;

import com.deboxadinhos.GestUp.dto.CreateUserDto;
import com.deboxadinhos.GestUp.exceptions.usuarioException.NotFoundUserException;
import com.deboxadinhos.GestUp.exceptions.usuarioException.VoidPasswordException;
import com.deboxadinhos.GestUp.models.User;
import com.deboxadinhos.GestUp.repository.UserRepository;
import com.deboxadinhos.GestUp.services.UserService;
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
    private UserService userService;
    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public List<User> list(){
        return userRepository.findAll();
    }

    @PostMapping
    public ResponseEntity<?> registerUser(@RequestBody CreateUserDto user){
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(userService.doRegister(user));
    }

    // Recebe a resposta do front end e cria um objeto usuario
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody CreateUserDto user){
            return ResponseEntity.status(HttpStatus.ACCEPTED).body(userService.doLogin(user));
    }

}
