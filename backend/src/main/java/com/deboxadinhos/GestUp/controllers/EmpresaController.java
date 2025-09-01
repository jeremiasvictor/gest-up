package com.deboxadinhos.GestUp.controllers;

import com.deboxadinhos.GestUp.models.Empresa;
import com.deboxadinhos.GestUp.models.Usuario;
import com.deboxadinhos.GestUp.repository.EmpresaRepository;
import com.deboxadinhos.GestUp.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.support.SimpleJpaRepository;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/empresa")
public class EmpresaController {

    @Autowired
    private EmpresaRepository empresaRepository;

    @Autowired
    private UsuarioRepository usuarioRepository;

    @GetMapping("/{id}")
    public Empresa listar_empresa(@PathVariable("id") long id){
        return empresaRepository.findByColumn(id);
    }

//    @PostMapping
//    public Empresa criar(@RequestBody Empresa empresa ){
//        return empresaRepository.save(empresa);
//    }
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Empresa criarEmpresa(@RequestBody Empresa empresa) {

        Long usuarioId = empresa.getUsuario().getId();

        Usuario usuario = usuarioRepository.findById(usuarioId)
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Usuário não encontrado com o ID: " + usuarioId));

        empresa.setUsuario(usuario);

        return empresaRepository.save(empresa);
    }

}
