package com.deboxadinhos.GestUp.repository;

import com.deboxadinhos.GestUp.dto.ProductDTO;
import com.deboxadinhos.GestUp.models.Product;
import jakarta.annotation.PreDestroy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.UUID;

public interface ProductRepository extends JpaRepository<Product, UUID> {

    @Query("SELECT p FROM Product p WHERE p.business.id = :businessId")
    List<Product> findByColumn(@Param("businessId") UUID id);
}
