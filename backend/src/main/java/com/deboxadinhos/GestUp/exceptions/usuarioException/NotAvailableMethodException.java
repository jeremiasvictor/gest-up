package com.deboxadinhos.GestUp.exceptions.usuarioException;

public class NotAvailableMethodException extends RuntimeException {
    public NotAvailableMethodException(String message) {
        super(message);
    }
    public NotAvailableMethodException() {
        super("Admin User is trying to do Regular User methods.");
    }
}
