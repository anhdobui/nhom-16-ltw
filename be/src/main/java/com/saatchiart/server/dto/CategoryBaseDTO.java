package com.saatchiart.server.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class CategoryBaseDTO {
    private Long id;
    private String name;
    private String code;
    
}
