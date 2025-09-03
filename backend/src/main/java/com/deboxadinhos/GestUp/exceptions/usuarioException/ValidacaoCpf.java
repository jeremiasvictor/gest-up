package com.deboxadinhos.GestUp.exceptions.usuarioException;

public class ValidacaoCpf extends RuntimeException {

    public ValidacaoCpf() {
        super("CPF inválido!");
    }

    public ValidacaoCpf(String message) {
        super(message);
    }
}
