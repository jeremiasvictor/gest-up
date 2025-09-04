package com.deboxadinhos.GestUp.exceptions.usuarioException;

public class SenhaInvalidaException extends RuntimeException {
    public SenhaInvalidaException(String message) {
        super(message);
    }

    public SenhaInvalidaException() {
        super("Senha esta errada irmao");
    }
}
