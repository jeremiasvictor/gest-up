package com.deboxadinhos.GestUp.infra;


import com.deboxadinhos.GestUp.exceptions.productExceptions.ProductHasInvalidPriceException;
import com.deboxadinhos.GestUp.exceptions.productExceptions.ProductHasInvalidQuantityException;
import com.deboxadinhos.GestUp.exceptions.productExceptions.ProductNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class ProductExceptionHandler {

    @ExceptionHandler(ProductNotFoundException.class)
    public ResponseEntity<String> ProductNotFoundHandler(ProductNotFoundException pnfe){
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(pnfe.getMessage());
    }

    @ExceptionHandler(ProductHasInvalidPriceException.class)
    public ResponseEntity<String> ProductHasPriceInvalidException(ProductHasInvalidPriceException phpie){
        return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body(phpie.getMessage());
    }

    @ExceptionHandler(ProductHasInvalidQuantityException.class)
    public ResponseEntity<String> ProductHasQuantityInvalidException(ProductHasInvalidQuantityException phiq){
        return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body(phiq.getMessage());
    }

}
