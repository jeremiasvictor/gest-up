package com.deboxadinhos.GestUp.repository;

import com.deboxadinhos.GestUp.models.BaseUser;
import com.deboxadinhos.GestUp.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface UserRepository extends JpaRepository<BaseUser, UUID> {
    Optional<BaseUser> findByEmail(String email);
    User findByName(String nome);
}
