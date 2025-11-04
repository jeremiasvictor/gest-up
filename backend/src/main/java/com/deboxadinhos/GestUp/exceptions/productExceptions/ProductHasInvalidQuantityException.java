package com.deboxadinhos.GestUp.exceptions.productExceptions;

public class ProductHasInvalidQuantityException extends RuntimeException {
    public ProductHasInvalidQuantityException() {
        super("This quantity is not acceptable");
    }
}
