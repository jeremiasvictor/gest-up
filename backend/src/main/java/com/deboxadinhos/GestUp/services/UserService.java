package com.deboxadinhos.GestUp.services;

import com.deboxadinhos.GestUp.exceptions.usuarioException.*;
import com.deboxadinhos.GestUp.models.User;
import com.deboxadinhos.GestUp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public ResponseEntity<?> doLogin(User userRequested) {

        authenticateEmail(userRequested.getEmail());

        User userInBank = userRepository.findByEmail(userRequested.getEmail());

        if (userInBank.getEmail() == null) {
            throw new NotFoundUserException();
        }

        if (userRequested.getPassword() == null){
            throw new VoidPasswordException();
        } else if (!userInBank.getPassword().equals(userRequested.getPassword())) {
            throw new InvalidPasswordException();
        }


        return ResponseEntity.status(HttpStatus.ACCEPTED).body("Login sucess");
    }

    public ResponseEntity<?> doRegister(User userResquested){
        authenticateEmail(userResquested.getEmail());

        userRepository.save(userResquested);
        return ResponseEntity.status(HttpStatus.ACCEPTED).body("Register sucess");
    }

    //Quando tiver nada para fazer coloque o cpf

    private void authenticateEmail(String email){
        if (email == null || !email.contains("@") || !email.contains(".com")){
            throw new InvalidEmailException();
        }
    }

}
