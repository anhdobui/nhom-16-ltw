package com.saatchiart.server.dto;

import java.math.BigDecimal;
import java.util.List;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ArtworkBaseDTO {
    private Long id;
    private String name;
    private BigDecimal price;
    private Double length;
    private Double width;
    private Double thickness;
    private Integer quantity;
    private String thumbnailUrl;
    private List<String> albumUrls;
    private String createdDate;
    private String modifiedDate;
}
