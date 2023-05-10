package com.saatchiart.server.service;

import java.util.List;

import org.springframework.data.domain.Pageable;

import com.saatchiart.server.dto.CategoryDTO;

public interface ICategoryService {
    CategoryDTO save(CategoryDTO categoryDTO) throws Exception;
    List<CategoryDTO> findAll(Pageable pageable);
    List<CategoryDTO> findAll();
    int totalItem();
    int delete(long[] ids);
}
