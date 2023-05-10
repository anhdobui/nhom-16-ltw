package com.saatchiart.server.mapper;

import java.text.SimpleDateFormat;

import org.springframework.stereotype.Component;

import com.saatchiart.server.dto.ArtworkCatDTO;
import com.saatchiart.server.dto.ArtworkDTO;
import com.saatchiart.server.dto.CategoryBaseDTO;
import com.saatchiart.server.entity.ArtworkEntity;

@Component
public class ArtworkMapper {
    private SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy");
    public ArtworkEntity toEntity(ArtworkDTO dto){
        ArtworkEntity entity = new ArtworkEntity();
        entity.setName(dto.getName());
        entity.setPrice(dto.getPrice());
        entity.setThickness(dto.getThickness());
        entity.setLength(dto.getLength());
        entity.setWidth(dto.getWidth());
        entity.setQuantity(dto.getQuantity());
        entity.setThumbnailUrl(dto.getThumbnailUrl());
        entity.setAlbumUrls(dto.getAlbumUrls());
        return entity;
    }
    public ArtworkEntity toEntity(ArtworkDTO dto,ArtworkEntity newEntity){
        newEntity.setName(dto.getName());
        newEntity.setPrice(dto.getPrice());
        newEntity.setThickness(dto.getThickness());
        newEntity.setLength(dto.getLength());
        newEntity.setWidth(dto.getWidth());
        newEntity.setQuantity(dto.getQuantity());
        newEntity.setThumbnailUrl(dto.getThumbnailUrl());
        newEntity.setAlbumUrls(dto.getAlbumUrls());
        return newEntity;
    }
    public ArtworkDTO toDTO(ArtworkEntity entity){
        ArtworkDTO dto = new ArtworkDTO();
        dto.setId(entity.getId());
        dto.setName(entity.getName());
        dto.setPrice(entity.getPrice());
        dto.setThickness(entity.getThickness());
        dto.setLength(entity.getLength());
        dto.setWidth(entity.getWidth());
        dto.setQuantity(entity.getQuantity());
        dto.setThumbnailUrl(entity.getThumbnailUrl());
        dto.setAlbumUrls(entity.getAlbumUrls());
        dto.setCategoryid(entity.getCategory().getId());
        return dto;
    }
    public ArtworkCatDTO toArtCatDTO(ArtworkEntity entity){
        ArtworkCatDTO dto = new ArtworkCatDTO();
        dto.setId(entity.getId());
        dto.setName(entity.getName());
        dto.setPrice(entity.getPrice());
        dto.setThickness(entity.getThickness());
        dto.setLength(entity.getLength());
        dto.setWidth(entity.getWidth());
        dto.setQuantity(entity.getQuantity());
        dto.setThumbnailUrl(entity.getThumbnailUrl());
        dto.setAlbumUrls(entity.getAlbumUrls());
        CategoryBaseDTO category = new CategoryBaseDTO();
        category.setCode(entity.getCategory().getCode());
        category.setId(entity.getCategory().getId());
        category.setName(entity.getCategory().getName());
        dto.setCategory(category);
        dto.setCreatedDate(formatter.format(entity.getCreatedDate()));
        dto.setModifiedDate(formatter.format(entity.getModifiedDate()));
        return dto;
    }
}
