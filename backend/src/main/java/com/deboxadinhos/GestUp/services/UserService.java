package com.deboxadinhos.GestUp.services;

import com.deboxadinhos.GestUp.dto.CreateUserDto;
import com.deboxadinhos.GestUp.dto.ResponseUserDTO;
import com.deboxadinhos.GestUp.exceptions.usuarioException.*;
import com.deboxadinhos.GestUp.models.User;
import com.deboxadinhos.GestUp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public ResponseUserDTO doLogin(CreateUserDto userRequested) {
        //Valida a sintaxe do email.
        authenticateEmail(userRequested.getEmail());

        //Cria um usuário nulo para atribuição posterior, cria um usuario com classe Optional (pois se o usuario nao existir, nao retornara NullPointerException)
        User userInBank;
        Optional<User> optionalUser = userRepository.findByEmail(userRequested.getEmail());

        //Se tem algo no optinal (não é nulo e só pode ser user), tire para fora e atribua no userInBank, se não, jogue a exceção.
        if (optionalUser.isPresent()) { userInBank = optionalUser.get(); }
        else { throw new NotFoundUserException(); }

        if (userRequested.getPassword() == null){ throw new VoidPasswordException(); }
        else if (!userInBank.getPassword().equals(userRequested.getPassword())) { throw new InvalidPasswordException();}

        return new ResponseUserDTO(userInBank.getId(), userInBank.getName(), userInBank.getEmail()) ;
    }

    public ResponseUserDTO doRegister(CreateUserDto userResquested){
        authenticateEmail(userResquested.getEmail());

        Optional<User> optionalUser = userRepository.findByEmail(userResquested.getEmail());

        if (optionalUser.isPresent()) {
            throw new UserAlreadyExists();
        } else {
            User user = new User(userResquested.getName(),userResquested.getEmail(),userResquested.getPassword());
            userRepository.save(user);
            return new ResponseUserDTO(user.getId(), user.getName(), user.getEmail());
        }
    }

    //Quando tiver nada para fazer coloque o cpf

    private void authenticateEmail(String email){
        if (email == null || !email.contains("@") || !email.contains(".com")){
            throw new InvalidEmailException();
        }
    }

}
