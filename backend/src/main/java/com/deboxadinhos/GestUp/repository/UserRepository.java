package com.deboxadinhos.GestUp.repository;

import com.deboxadinhos.GestUp.models.BaseUser;
import com.deboxadinhos.GestUp.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface UserRepository extends JpaRepository<BaseUser, UUID> {
    Optional<BaseUser> findByEmail(String email);
    User findByName(String nome);

    @Query("SELECT u FROM User u")
    List<User> findAllRegularUsers();
}
