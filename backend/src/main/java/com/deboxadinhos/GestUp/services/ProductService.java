package com.deboxadinhos.GestUp.services;


import com.deboxadinhos.GestUp.dto.CreateProductDTO;
import com.deboxadinhos.GestUp.dto.ProductDTO;
import com.deboxadinhos.GestUp.exceptions.productExceptions.ProductNotFoundException;
import com.deboxadinhos.GestUp.models.Business;
import com.deboxadinhos.GestUp.models.Product;
import com.deboxadinhos.GestUp.repository.BusinessRepository;
import com.deboxadinhos.GestUp.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
    public ProductDTO createProduct(CreateProductDTO createProductDTO) {

        Optional<Business> business = businessRepository.findById(createProductDTO.getBusiness_id());

        Product product = new Product(createProductDTO.getName(), createProductDTO.getQuantity(), createProductDTO.getPrice(), business.get());
        productRepository.save(product);

        return new ProductDTO(product.getId(),product.getName(), product.getQuantity(), product.getPrice());
    }

    @Override
    public ProductDTO updateProduct(ProductDTO productDTO) throws ProductNotFoundException {

        Product productToUpdate;
        Optional<Product> optionalProduct = productRepository.findById(productDTO.getId());

        if (optionalProduct.isPresent()){
            productToUpdate = optionalProduct.get();
        } else {
            throw new ProductNotFoundException();
        }

        productToUpdate.setName(productDTO.getName());
        productToUpdate.setPrice(productDTO.getPrice());
        productToUpdate.setQuantity(productDTO.getQuantity());

        productRepository.save(productToUpdate);

        return new ProductDTO(productToUpdate.getId(), productToUpdate.getName(), productToUpdate.getQuantity(), productToUpdate.getPrice());
    }

    @Override
    public List<ProductDTO> listProductByBusinessId(UUID businessId){

        List<Product> productList = productRepository.findByColumn(businessId);
        List<ProductDTO> productDTOSList= new ArrayList<>();

        for(Product product: productList){
            productDTOSList.add(new ProductDTO(product.getId(),product.getName(), product.getQuantity(), product.getPrice()));
        }
        return productDTOSList;
    }

    @Override
    public void deleteProductById(UUID idProduct) throws ProductNotFoundException {

        Optional<Product> product = productRepository.findById(idProduct);

        if (product.isEmpty()) {
            throw new ProductNotFoundException();
        } else {
            productRepository.deleteById(product.get().getId());
        }

//        List<ProductDTO> products = listProductByBusinessId(idBusiness);
//
//        for (ProductDTO product : products ){
//            if(idProduct.equals(product.getId())){
//                productRepository.deleteById(idProduct);
//                return;
//            }
//        }
//        throw new ProductNotFoundException("not found");
    }
}
