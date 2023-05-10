package com.saatchiart.server.dto;

import java.util.ArrayList;
import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CategoryAwDTO extends CategoryBaseDTO{
    private String shortDescription;
    private String content;
    private List<ArtworkBaseDTO> artworks = new ArrayList<>();
    private Integer countArtworks = this.getArtworks().size();
}
