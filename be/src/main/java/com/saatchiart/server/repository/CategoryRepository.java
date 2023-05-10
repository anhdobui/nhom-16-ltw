package com.saatchiart.server.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.saatchiart.server.entity.CategoryEntity;

public interface CategoryRepository extends JpaRepository<CategoryEntity,Long> {
    Page<CategoryEntity> findAllByOrderByCreatedDateDesc(Pageable pageable);
    List<CategoryEntity> findAllByOrderByCreatedDateDesc();
}
