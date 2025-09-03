package com.deboxadinhos.GestUp.services;

import com.deboxadinhos.GestUp.exceptions.usuarioException.*;
import com.deboxadinhos.GestUp.models.Usuario;
import com.deboxadinhos.GestUp.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public ResponseEntity<?> realizarLogin(Usuario usuarioRequisitado) {

        validarEmail(usuarioRequisitado.getEmail());

        Usuario usuarioNoBanco = usuarioRepository.findByEmail(usuarioRequisitado.getEmail());

        if (usuarioNoBanco.getEmail() == null) {
            throw new UsuarioInexistenteException();
        }

        if (usuarioRequisitado.getSenha() == null){
            throw new SenhaVaziaException();
        } else if (usuarioNoBanco.getSenha().equals(usuarioRequisitado.getSenha())) {
            throw new SenhaInvalidaException();
        }


        return ResponseEntity.status(HttpStatus.ACCEPTED).body("Login realizado");
    }

    public ResponseEntity<?> realizarCadastro(Usuario usuarioRequisitado){
        validarEmail(usuarioRequisitado.getEmail());

        usuarioRepository.save(usuarioRequisitado);
        return ResponseEntity.status(HttpStatus.ACCEPTED).body("Cadastro realizado");
    }

    //Quando tiver nada para fazer coloque o cpf

    private void validarEmail(String email){
        if (email == null || !email.contains("@") || !email.contains(".com")){
            throw new EmailInvalidoException();
        }
    }

}
