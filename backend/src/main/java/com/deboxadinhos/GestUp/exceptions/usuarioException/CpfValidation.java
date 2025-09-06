package com.deboxadinhos.GestUp.exceptions.usuarioException;

public class CpfValidation extends RuntimeException {

    public CpfValidation() {
        super("CPF not valid");
    }

    public CpfValidation(String message) {
        super(message);
    }
}
