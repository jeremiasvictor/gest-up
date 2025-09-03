package com.deboxadinhos.GestUp.exceptions.usuarioException;

public class SenhaVaziaException extends RuntimeException {

    public SenhaVaziaException(String message) {
        super(message);
    }

    public SenhaVaziaException() {
        super("Coloca uma senha ai irmao");
    }
}

