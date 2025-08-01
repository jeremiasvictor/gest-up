package com.deboxadinhos.GestUp;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.Mapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController //Mapear o arquivo o arquivo java
@RequestMapping
public class Controller {

    @GetMapping("/boasvindas") //rotas
    public String boasVindas(){
        return "Essa eh a minha primeira mensagem ";
    }

}
