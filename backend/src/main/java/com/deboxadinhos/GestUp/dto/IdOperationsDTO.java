package com.deboxadinhos.GestUp.dto;

import java.util.UUID;

public class IdOperationsDTO {

    private UUID id;

    public IdOperationsDTO(){}

    public IdOperationsDTO(UUID id){
        this.id = id;
    }

    public UUID getId() {
        return id;
    }
    public void setId(UUID id) {
        this.id = id;
    }
}
