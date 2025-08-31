package com.deboxadinhos.GestUp.controllers;

import com.deboxadinhos.GestUp.repository.UsuarioRepository;
import com.deboxadinhos.GestUp.models.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @GetMapping
    public List<Usuario> listar(){
        return usuarioRepository.findAll();
    }

    @PostMapping
    public Usuario save(@RequestBody Usuario usuario){
        return usuarioRepository.save(usuario);
    }

    @PostMapping("/loginGestUp")//rota login
    // Recebe a resposta do front end e cria um objeto usuario
    public ResponseEntity<?> loginUsuario(@RequestBody Usuario usuario){

        Usuario usuarioProcurado = usuarioRepository.findByEmail(usuario.getEmail());

        if (usuarioProcurado == null){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Erro: Email ou senha inválidos");
        }

        if (usuario.getSenha().equals(usuarioProcurado.getSenha())){
            return ResponseEntity.ok().build();
        }
        else{
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Senha incorreta");
        }

    }

}
