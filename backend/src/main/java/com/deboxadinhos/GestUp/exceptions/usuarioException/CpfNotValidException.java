package com.deboxadinhos.GestUp.exceptions.usuarioException;

public class CpfNotValidException extends RuntimeException {

    public CpfNotValidException() {
        super("CPF isn't valid.");
    }

    public CpfNotValidException(String message) {
        super(message);
    }
}
