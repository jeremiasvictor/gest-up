package com.deboxadinhos.GestUp.exceptions.usuarioException;

public class NotFoundUserException extends RuntimeException {

    public NotFoundUserException() {
        super("Doesn't exist an user.");
    }
}
