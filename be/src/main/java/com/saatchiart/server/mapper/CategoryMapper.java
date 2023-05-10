package com.saatchiart.server.mapper;

import java.text.SimpleDateFormat;

import org.springframework.stereotype.Component;

import com.saatchiart.server.dto.CategoryAwDTO;
import com.saatchiart.server.dto.CategoryDTO;
import com.saatchiart.server.entity.CategoryEntity;

@Component
public class CategoryMapper {
    private SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy");
    public CategoryEntity toEntity(CategoryDTO dto){
        CategoryEntity entity = new CategoryEntity();
        entity.setCode(dto.getCode());
        entity.setContent(dto.getContent());
        entity.setName(dto.getName());
        entity.setShortDescription(dto.getShortDescription());
        return entity;
    }
    public CategoryEntity toEntity(CategoryDTO dto,CategoryEntity oldEntity){
        oldEntity.setCode(dto.getCode());
        oldEntity.setName(dto.getName());
        return oldEntity;
    }
    public CategoryDTO toDTO(CategoryEntity entity){
        CategoryDTO dto = new CategoryDTO();
        dto.setId(entity.getId());
        dto.setCode(entity.getCode());
        dto.setName(entity.getName());
        dto.setCountArtworks(entity.getArtworks().size());
        dto.setCreatedDate(formatter.format(entity.getCreatedDate()));
        dto.setModifiedDate(formatter.format(entity.getModifiedDate()));
        return dto;
    }
    public CategoryAwDTO toCatAwDTO(CategoryEntity entity){
        CategoryAwDTO dto = new CategoryAwDTO();
        dto.setId(entity.getId());
        dto.setCode(entity.getCode());
        dto.setContent(entity.getContent());
        dto.setName(entity.getName());
        dto.setShortDescription(entity.getShortDescription());
        dto.setCountArtworks(entity.getArtworks().size());
        return dto;
    }

}
