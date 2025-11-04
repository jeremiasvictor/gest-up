package com.deboxadinhos.GestUp.exceptions.businessExceptions;

public class BusinessNotFound extends RuntimeException {
    public BusinessNotFound() {
        super("Business not found");
    }
}
