package com.deboxadinhos.GestUp.infra;

import com.deboxadinhos.GestUp.exceptions.businessExceptions.BusinessNotFound;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class BusinessExceptionHandler {

    @ExceptionHandler(BusinessNotFound.class)
    public ResponseEntity<String> BusinessNotFound(BusinessNotFound bnf){
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(bnf.getMessage());
    }
}
