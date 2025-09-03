package com.deboxadinhos.GestUp.controllers;

import com.deboxadinhos.GestUp.repository.UsuarioRepository;
import com.deboxadinhos.GestUp.models.Usuario;
import com.deboxadinhos.GestUp.services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {

    private UsuarioService usuarioService;
    @Autowired
    private UsuarioRepository usuarioRepository;

    @GetMapping
    public List<Usuario> listar(){
        return usuarioRepository.findAll();
    }

    @PostMapping
    public ResponseEntity<?> cadastroUsuario(@RequestBody Usuario usuario){
        return usuarioService.realizarCadastro(usuario);
    }

    // Recebe a resposta do front end e cria um objeto usuario
    @PostMapping("/login")
    public ResponseEntity<?> loginUsuario(@RequestBody Usuario usuario){
        return usuarioService.realizarLogin(usuario);
    }

}
