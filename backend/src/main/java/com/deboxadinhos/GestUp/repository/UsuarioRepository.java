package com.deboxadinhos.GestUp.repository;

import com.deboxadinhos.GestUp.models.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    Usuario findByEmail(String email);
}
