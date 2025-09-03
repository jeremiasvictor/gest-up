package com.deboxadinhos.GestUp.exceptions.usuarioException;

public class UsuarioInexistenteException extends RuntimeException {

    public UsuarioInexistenteException() {
        super("Não existe um usuário registrado com esse email.");
    }
}
