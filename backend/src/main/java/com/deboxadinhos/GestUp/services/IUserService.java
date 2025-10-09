package com.deboxadinhos.GestUp.services;

import com.deboxadinhos.GestUp.dto.CreateUserDTO;
import com.deboxadinhos.GestUp.dto.ResponseUserDTO;
import com.deboxadinhos.GestUp.models.User;

import java.util.List;

public interface IUserService {
    List<User> findAll();
    ResponseUserDTO doLogin(CreateUserDTO userRequested);
    ResponseUserDTO doRegister(CreateUserDTO userRequested);
}
