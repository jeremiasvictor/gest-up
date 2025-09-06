package com.deboxadinhos.GestUp.controllers;

import com.deboxadinhos.GestUp.models.User;
import com.deboxadinhos.GestUp.repository.UserRepository;
import com.deboxadinhos.GestUp.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
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
    public ResponseEntity<?> registerUser(@RequestBody User user){
        return userService.doRegister(user);
    }

    // Recebe a resposta do front end e cria um objeto usuario
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody User user){
        return userService.doLogin(user);
    }

}
