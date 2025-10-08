package com.deboxadinhos.GestUp.services;

import com.deboxadinhos.GestUp.dto.CreateProductDTO;
import com.deboxadinhos.GestUp.dto.ProductDTO;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.UUID;

public interface IProductService {

    ProductDTO createProduct(CreateProductDTO createProductDTO);
    ProductDTO updateProduct(ProductDTO product);
    List<ProductDTO> listProductByBusinessId(UUID businessId);
    void deleteProductById(UUID idProduct);
}
