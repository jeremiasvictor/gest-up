package com.deboxadinhos.GestUp.exceptions.productExceptions;

public class ProductNotFoundException extends RuntimeException {
    public ProductNotFoundException(String message) {
        super(message);
    }
}
