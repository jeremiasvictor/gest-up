package com.deboxadinhos.GestUp.dto;

import java.util.UUID;

public class IdOperationsDTO {

    private UUID productId;

    public IdOperationsDTO(){}

    public IdOperationsDTO(UUID productId){
        this.productId = productId;
    }

    public UUID getProductId() {
        return productId;
    }
    public void setProductId(UUID productId) {
        this.productId = productId;
    }
}
