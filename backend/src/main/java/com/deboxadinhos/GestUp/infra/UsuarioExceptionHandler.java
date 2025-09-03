package com.deboxadinhos.GestUp.infra;

import com.deboxadinhos.GestUp.exceptions.usuarioException.EmailInvalidoException;
import com.deboxadinhos.GestUp.exceptions.usuarioException.SenhaInvalidaException;
import com.deboxadinhos.GestUp.exceptions.usuarioException.SenhaVaziaException;
import com.deboxadinhos.GestUp.exceptions.usuarioException.UsuarioInexistenteException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class UsuarioExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler(SenhaVaziaException.class)
    public ResponseEntity<String> SenhaVaziaHandler(SenhaVaziaException sve) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(sve.getMessage());
    }

    @ExceptionHandler(SenhaInvalidaException.class)
    public ResponseEntity<String> SenhaInvalidaHandler(SenhaInvalidaException siv){
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(siv.getMessage());
    }

    @ExceptionHandler(EmailInvalidoException.class)
    public ResponseEntity<String> EmailInvalidoHandler(EmailInvalidoException eie){
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(eie.getMessage());
    }

    @ExceptionHandler(UsuarioInexistenteException.class)
    public ResponseEntity<String> UsuarioInexistenteHandler(UsuarioInexistenteException ui) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ui.getMessage());
    }
}
