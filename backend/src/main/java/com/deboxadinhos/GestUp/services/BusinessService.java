package com.deboxadinhos.GestUp.services;

import com.deboxadinhos.GestUp.dto.BusinessDTO;
import com.deboxadinhos.GestUp.dto.CreateBusinessDTO;
import com.deboxadinhos.GestUp.exceptions.usuarioException.NotFoundUserException;
import com.deboxadinhos.GestUp.models.Business;
import com.deboxadinhos.GestUp.models.User;
import com.deboxadinhos.GestUp.repository.BusinessRepository;
import com.deboxadinhos.GestUp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class BusinessService implements IBusinessService{

    @Autowired
    private BusinessRepository businessRepository;
    @Autowired
    private UserRepository userRepository;

    @Override
    public List<BusinessDTO> findBusinessesByUserId(UUID idUsuario) throws NotFoundUserException {

        Optional<User> optionalUser = userRepository.findById(idUsuario);
        if (optionalUser.isEmpty()) { throw new NotFoundUserException(); }

        List<Business> businesses = businessRepository.findByColumn(idUsuario); // Lista trazida pelo repository
        List<BusinessDTO> businessDTOS = new ArrayList<>(); // Lista que vai ser enviada para a controller, sem o parâmetro User.

        //
        //Espaço para mapear a List<Product> de cada business para uma List<ProductDTO>, pois assim evita erros de serialização infinita do JSON.
        //

        for (Business business : businesses) {
            businessDTOS.add(new BusinessDTO(business.getId(), business.getName(), business.getCnpj(), business.getAddress(), business.getProduct() /* A List<ProductDTO entraria aqui. >*/));
        }

        return businessDTOS;
    }

    @Override
    public BusinessDTO createBusiness(CreateBusinessDTO createBusinessDTO) {

        Optional<User> optionalUser = userRepository.findById(createBusinessDTO.getUserID());
        if (optionalUser.isEmpty()) { throw new NotFoundUserException(); }

        Business business = new Business(createBusinessDTO.getName(), createBusinessDTO.getCnpj(), createBusinessDTO.getAddress(), optionalUser.get(),createBusinessDTO.getProducts());
        businessRepository.save(business);

        return new BusinessDTO(business.getId(), business.getName(), business.getCnpj(), business.getAddress(), business.getProduct());

    }
}
