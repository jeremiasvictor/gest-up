package com.deboxadinhos.GestUp;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import java.util.List;

public interface ProdutoRepository extends CrudRepository<Produto, Long> {

    @Query("SELECT p FROM Produto WHERE p.id = ?1")
    Produto buscarProdutoPorId(long id);

    @Query("SELECT p FROM Produto p") //codigo sql
    List<Produto> buscarTodosProdutos(); //converte para java


}