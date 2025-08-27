package com.deboxadinhos.GestUp.repository;

import com.deboxadinhos.GestUp.models.Produto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProdutoRepository extends JpaRepository<Produto, Long> {
}
