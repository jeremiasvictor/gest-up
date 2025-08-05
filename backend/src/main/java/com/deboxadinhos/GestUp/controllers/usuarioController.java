package com.deboxadinhos.GestUp.controllers;


import com.deboxadinhos.GestUp.UsuarioRepository;
import com.deboxadinhos.GestUp.models.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/usuario")
public class usuarioController {

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

}
