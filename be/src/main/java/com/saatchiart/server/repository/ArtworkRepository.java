package com.saatchiart.server.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.saatchiart.server.entity.ArtworkEntity;

public interface ArtworkRepository extends JpaRepository<ArtworkEntity,Long>{
    Page<ArtworkEntity> findAllByOrderByCreatedDateDesc(Pageable pageable);
    List<ArtworkEntity> findAllByOrderByCreatedDateDesc();
}