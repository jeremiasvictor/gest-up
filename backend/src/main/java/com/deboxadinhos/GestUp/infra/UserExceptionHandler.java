package com.deboxadinhos.GestUp.infra;

import com.deboxadinhos.GestUp.exceptions.usuarioException.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class UserExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler(VoidPasswordException.class)
    public ResponseEntity<String> VoidPasswordHandler(VoidPasswordException vpe) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(vpe.getMessage());
    }

    @ExceptionHandler(InvalidPasswordException.class)
    public ResponseEntity<String> InvalidPasswordHandler(InvalidPasswordException ipe){
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(ipe.getMessage());
    }

    @ExceptionHandler(InvalidEmailException.class)
    public ResponseEntity<String> InvalidEmailHandler(InvalidEmailException iee){
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(iee.getMessage());
    }

    @ExceptionHandler(NotFoundUserException.class)
    public ResponseEntity<String> NonExistUserHandler(NotFoundUserException nfue) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(nfue.getMessage());
    }

    @ExceptionHandler(EmailAlreadyExistsException.class)
    public ResponseEntity<String> UserAlreadyExists(EmailAlreadyExistsException eae) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(eae.getMessage());
    }
}
