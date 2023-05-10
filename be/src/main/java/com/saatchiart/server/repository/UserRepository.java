package com.saatchiart.server.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.saatchiart.server.entity.User;

public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findByEmail(String email);
}
