package com.saatchiart.server.service;

import java.util.List;

import org.springframework.data.domain.Pageable;

import com.saatchiart.server.dto.ArtworkCatDTO;
import com.saatchiart.server.dto.ArtworkDTO;

public interface IArtworkService {
    ArtworkDTO save(ArtworkDTO artworkDTO) throws Exception;
    int delete(long[] ids);
    List<ArtworkCatDTO> findAll(Pageable pageable);
    List<ArtworkCatDTO> findAll();
    int totalItem();
}
