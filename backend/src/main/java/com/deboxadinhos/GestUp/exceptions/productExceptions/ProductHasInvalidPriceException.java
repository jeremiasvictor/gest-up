package com.deboxadinhos.GestUp.exceptions.productExceptions;

public class ProductHasInvalidPriceException extends RuntimeException {
    public ProductHasInvalidPriceException() {
        super("This product has negative price");
    }
}
