package com.deboxadinhos.GestUp.exceptions.productExceptions;

public class ProductHasInvalidQuantityException extends RuntimeException {
    public ProductHasInvalidQuantityException() {
        super("Put some quantity");
    }
}
