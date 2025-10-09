package com.deboxadinhos.GestUp.exceptions.usuarioException;

public class NotFoundUserException extends RuntimeException {

    public NotFoundUserException() {
        super("This user wasn't found.");
    }
}
