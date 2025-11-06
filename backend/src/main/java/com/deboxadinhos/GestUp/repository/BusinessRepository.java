package com.deboxadinhos.GestUp.repository;

import com.deboxadinhos.GestUp.models.Business;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.UUID;

public interface BusinessRepository extends JpaRepository <Business, UUID> {

    @Query("SELECT b FROM Business b WHERE b.user.id = :user_id")
    List<Business> findByColumn(@Param("user_id") UUID user_id);
}