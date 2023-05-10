package com.saatchiart.server.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.saatchiart.server.dto.CategoryDTO;
import com.saatchiart.server.entity.CategoryEntity;
import com.saatchiart.server.mapper.CategoryMapper;
import com.saatchiart.server.repository.CategoryRepository;
import com.saatchiart.server.service.ICategoryService;

@Service
public class CategoryService implements ICategoryService{
    @Autowired
    private CategoryMapper categoryMapper;

    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public CategoryDTO save(CategoryDTO categoryDTO) throws Exception {
        CategoryEntity categoryEntity = new CategoryEntity();
        if(categoryDTO.getId() != null){
            CategoryEntity oldCategoryEntity = categoryRepository.findById(categoryDTO.getId()).orElse(null);
            if(oldCategoryEntity != null){
                categoryEntity = categoryMapper.toEntity(categoryDTO,oldCategoryEntity);
            }else{
                throw new Exception("Không tồn tại tập tranh");
            }
        }else{
            categoryEntity = categoryMapper.toEntity(categoryDTO);
        }
        categoryEntity = categoryRepository.save(categoryEntity);
        return categoryMapper.toDTO(categoryEntity);
    }

    @Override
    public List<CategoryDTO> findAll(Pageable pageable) {
        List<CategoryDTO> results = new ArrayList<>();
        List<CategoryEntity> entities = categoryRepository.findAllByOrderByCreatedDateDesc(pageable).getContent();
        for(CategoryEntity item:entities){
            CategoryDTO categoryDTO = categoryMapper.toDTO(item);
            results.add(categoryDTO);
        }
        return results;
        
    }

    @Override
    public List<CategoryDTO> findAll() {
        List<CategoryDTO> results = new ArrayList<>();
        List<CategoryEntity> entities = categoryRepository.findAllByOrderByCreatedDateDesc();
        for(CategoryEntity item:entities){
            CategoryDTO categoryDTO = categoryMapper.toDTO(item);
            results.add(categoryDTO);
        }
        return results;
    }

    @Override
    public int totalItem() {
        int result = (int) categoryRepository.count();
        return result;
    }

    @Override
    public int delete(long[] ids) {
        int oldLength = (int) categoryRepository.count();
        for(long id: ids) {
			categoryRepository.deleteById(id);
		}
        int newLength = (int) categoryRepository.count();
        return oldLength-newLength;
    }
}
