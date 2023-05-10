package com.saatchiart.server.dto;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ArtworkCatDTO extends ArtworkBaseDTO{
    private CategoryBaseDTO category;
}
