package com.deboxadinhos.GestUp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController // indica que retorna json
@RequestMapping("/produtos") //cria a rota produtos
public class produtoController {

    @Autowired //diz ao Spring para injetar automaticamente uma instância do ProdutoRepository.
    private ProdutoRepository produtoRepository;

    @GetMapping
    public List<Produto> listar(){
        return produtoRepository.buscarTodosProdutos();
    }

    @GetMapping("/{id}") // rota: /produtos/{id}
    public Produto buscarPorId(@PathVariable long id) {
        Produto produto = buscarPorId(id);// busca o produto

        if(produto == null) {
            return null; // (caso queira)
        }

        return produto; // retorna o produto se encontrado
    }

    @PostMapping //
    public Produto salvar(@RequestBody Produto produto){

        return produtoRepository.save(produto);
    }

    @PutMapping("/{id}")
    public Produto atualizar(@PathVariable long id, @RequestBody Produto produtoAtualizado){
        Produto produtoExistente = buscarPorId(id);

        if(produtoExistente == null){
            return null;
        }

        produtoExistente.setNomeProduto(produtoAtualizado.getNomeProduto());
        produtoExistente.setQuantidade(produtoAtualizado.getQuantidade());
        produtoExistente.setValor(produtoAtualizado.getValor());

        return produtoRepository.save(produtoExistente);

    }


}
