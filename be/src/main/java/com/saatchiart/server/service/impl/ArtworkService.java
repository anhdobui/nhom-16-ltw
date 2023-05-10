package com.saatchiart.server.service.impl;


import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.saatchiart.server.dto.ArtworkCatDTO;
import com.saatchiart.server.dto.ArtworkDTO;
import com.saatchiart.server.entity.ArtworkEntity;
import com.saatchiart.server.entity.CategoryEntity;
import com.saatchiart.server.mapper.ArtworkMapper;
import com.saatchiart.server.repository.ArtworkRepository;
import com.saatchiart.server.repository.CategoryRepository;
import com.saatchiart.server.service.IArtworkService;


@Service
public class ArtworkService implements IArtworkService{

    @Autowired
    private ArtworkMapper artworkMapper;

    @Autowired
    private ArtworkRepository artworkRepository;
    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    @CacheEvict(value = {"artworkCache", "CateCache"}, allEntries = true)
    public ArtworkDTO save(ArtworkDTO artworkDTO) throws Exception {
        ArtworkEntity artworkEntity = new ArtworkEntity();
        CategoryEntity categoryEntity = null;
        if(artworkDTO.getCategoryid() != null){
            categoryEntity = categoryRepository.findById(artworkDTO.getCategoryid()).orElse(new CategoryEntity());
            if(categoryEntity == null){
                throw new Exception("Tập tranh không tồn tại");
            }
        }else{
            categoryEntity = categoryRepository.findById((long) 1).orElse(null);
            if(categoryEntity == null){
                throw new Exception("Tập tranh không tồn tại");
            }
        }
        if(artworkDTO.getId() != null ){
            ArtworkEntity oldArtworkEntity = artworkRepository.findById(artworkDTO.getId()).orElse(null);
            if(oldArtworkEntity != null){
                artworkEntity = artworkMapper.toEntity(artworkDTO, oldArtworkEntity);
            }else{
                throw new Exception("Không tồn tại tranh");
            }
        }else{
            artworkEntity = artworkMapper.toEntity(artworkDTO);
        }
        artworkEntity.setCategory(categoryEntity);
        artworkEntity = artworkRepository.save(artworkEntity);
        return artworkMapper.toDTO(artworkEntity);
    }

    @Override
    public int delete(long[] ids) {
        int oldLength = (int) artworkRepository.count();
        for(long id: ids) {
			artworkRepository.deleteById(id);
		}
        int newLength = (int) artworkRepository.count();
        return oldLength-newLength;
    }

    @Override
    @Cacheable(value="dataCache")
    public List<ArtworkCatDTO> findAll(Pageable pageable) {
        List<ArtworkCatDTO> results = new ArrayList<>();
        List<ArtworkEntity> entities = artworkRepository.findAllByOrderByCreatedDateDesc(pageable).getContent();
        for(ArtworkEntity item : entities){
            ArtworkCatDTO artworkCatDTO = new ArtworkCatDTO();
            artworkCatDTO = artworkMapper.toArtCatDTO(item);
            results.add(artworkCatDTO);
        }
        return results;
    }

    @Override
    // @Cacheable(value="dataCache")
    public List<ArtworkCatDTO> findAll() {
        List<ArtworkCatDTO> results = new ArrayList<>();
        List<ArtworkEntity> entities = artworkRepository.findAllByOrderByCreatedDateDesc();
        for(ArtworkEntity item : entities){
            ArtworkCatDTO artworkCatDTO = new ArtworkCatDTO();
            artworkCatDTO = artworkMapper.toArtCatDTO(item);
            results.add(artworkCatDTO);
        }
        return results;
    }

    @Override
    public int totalItem() {
        return (int) artworkRepository.count();
    }
}


        

                