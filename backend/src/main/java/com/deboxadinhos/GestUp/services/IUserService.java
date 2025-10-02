package com.deboxadinhos.GestUp.services;

import com.deboxadinhos.GestUp.dto.CreateUserDto;
import com.deboxadinhos.GestUp.dto.ResponseUserDTO;
import com.deboxadinhos.GestUp.models.User;

import java.util.List;

public interface IUserService {
    List<User> findAll();
    ResponseUserDTO doLogin(CreateUserDto userRequested);
    ResponseUserDTO doRegister(CreateUserDto userRequested);
}
