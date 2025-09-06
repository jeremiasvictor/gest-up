package com.deboxadinhos.GestUp.exceptions.usuarioException;

public class NotFoundUserException extends RuntimeException {

    public NotFoundUserException() {
        super("Don't exist an user with this email.");
    }
}
