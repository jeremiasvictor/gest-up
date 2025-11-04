package com.deboxadinhos.GestUp.controllers;

import com.deboxadinhos.GestUp.dto.CreateBusinessDTO;
import com.deboxadinhos.GestUp.dto.CreateProductDTO;
import com.deboxadinhos.GestUp.dto.IdOperationsDTO;
import com.deboxadinhos.GestUp.dto.ProductDTO;
import com.deboxadinhos.GestUp.models.Product;
import com.deboxadinhos.GestUp.repository.ProductRepository;
import com.deboxadinhos.GestUp.services.IProductService;
import com.deboxadinhos.GestUp.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/product")
@CrossOrigin(origins = "http://localhost:5173")
public class ProductController {

    @Autowired
    private IProductService productService;

    @GetMapping("/{id}")
    public ResponseEntity<?> listProductBusiness(@PathVariable("id") UUID businessId){
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(productService.listProductByBusinessId(businessId));
    }

    @PostMapping
    public ResponseEntity<?> createProduct(@RequestBody CreateProductDTO productDTO) {
        return ResponseEntity.status(HttpStatus.CREATED).body(productService.createProduct(productDTO));
    }

    @PostMapping("/updateProduct")
    public ResponseEntity<?> updateProduct(@RequestBody ProductDTO productDTO){
        return ResponseEntity.status(HttpStatus.OK).body(productService.updateProduct(productDTO));
    }

    @DeleteMapping
    public  ResponseEntity<?> deleteProduct(@RequestBody IdOperationsDTO idOperationsDTO){

        productService.deleteProductById(idOperationsDTO.getId());
        return ResponseEntity.status(HttpStatus.OK).body("Product was deleted.");
    }

}
