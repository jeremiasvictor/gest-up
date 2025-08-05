package com.deboxadinhos.GestUp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController // indica que retorna json
@RequestMapping("/produtos") //cria a rota produtos
public class produtoController {

    @Autowired
    private ProdutoRepository produtoRepository;

    @GetMapping
    public List<Produto> listar(){
        return produtoRepository.findAll();
    }

    @PostMapping //
    public Produto salvar(@RequestBody Produto produto){
        return produtoRepository.save(produto);
    }


}
