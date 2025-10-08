package com.deboxadinhos.GestUp.services;


import com.deboxadinhos.GestUp.dto.CreateProductDTO;
import com.deboxadinhos.GestUp.dto.ProductDTO;
import com.deboxadinhos.GestUp.exceptions.productExceptions.ProductNotFoundException;
import com.deboxadinhos.GestUp.models.Business;
import com.deboxadinhos.GestUp.models.Product;
import com.deboxadinhos.GestUp.repository.BusinessRepository;
import com.deboxadinhos.GestUp.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class ProductService implements IProductService{

    @Autowired
    ProductRepository productRepository;

    @Autowired
    BusinessRepository businessRepository;
    @Override
    public ProductDTO createProduct(CreateProductDTO small_product) {

        Optional<Business> business = businessRepository.findById(small_product.getBusiness_id());

        Product product = new Product(small_product.getName(), small_product.getQuantity(), small_product.getPrice(), business.get());
        productRepository.save(product);

        return new ProductDTO(product.getId(),product.getName(), product.getQuantity(), product.getPrice());
    }

    @Override
    public ProductDTO updateProduct(ProductDTO productDTO) throws ProductNotFoundException {

        Product product_back;
        Optional<Product> optionalProduct = productRepository.findById(productDTO.getId());

        if (optionalProduct.isPresent()){
            product_back = optionalProduct.get();
        }else{
            throw new ProductNotFoundException("Existe nao man");
        }

        product_back.setName(productDTO.getName());
        product_back.setPrice(productDTO.getPrice());
        product_back.setQuantity(productDTO.getQuantity());

        productRepository.save(product_back);

        return new ProductDTO(product_back.getId(),product_back.getName(), product_back.getQuantity(), product_back.getPrice());
    }

    @Override
    public List<ProductDTO> listProductByBusinessId(UUID businessId){

        List<Product> productList = productRepository.findByColumn(businessId);

        List<ProductDTO> productDtosList= new ArrayList<>();

        for(Product product: productList){
            productDtosList.add(new ProductDTO(product.getId(),product.getName(), product.getQuantity(), product.getPrice()));
        }
        return productDtosList;
    }
}
