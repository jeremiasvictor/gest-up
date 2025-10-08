package com.deboxadinhos.GestUp.dto;

import java.util.UUID;

public class IdOperationsDTO {

    private UUID businessId;
    private UUID productId;

    public IdOperationsDTO(){}

    public IdOperationsDTO(UUID businessId, UUID productId){
        this.businessId = businessId;
        this.productId = productId;
    }

    public UUID getBusinessId() {
        return businessId;
    }
    public UUID getProductId() {
        return productId;
    }
}
