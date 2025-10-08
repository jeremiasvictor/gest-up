package com.deboxadinhos.GestUp.controllers;

import com.deboxadinhos.GestUp.models.Product;
import com.deboxadinhos.GestUp.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/product")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @PostMapping
    public Product create(@RequestBody Product product) {
        return productRepository.save(product);
    }

    @GetMapping
    public List<Product> list() { return productRepository.findAll(); }

}
