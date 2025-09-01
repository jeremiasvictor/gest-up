package com.deboxadinhos.GestUp.repository;

import com.deboxadinhos.GestUp.models.Empresa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface EmpresaRepository extends JpaRepository <Empresa, Long> {

    @Query("SELECT e FROM Empresa e WHERE e.usuario.id = :usuario_id")
    Empresa findByColumn(@Param("usuario_id") Long usuario_id);
}
