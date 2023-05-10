package com.saatchiart.server.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CategoryDTO extends CategoryBaseDTO{
    private String shortDescription;
    private String content;
    private Integer countArtworks;
    private String createdDate;
    private String modifiedDate;
}
