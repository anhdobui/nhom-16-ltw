package com.saatchiart.server.entity;

import java.math.BigDecimal;
import java.util.List;

import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "artwork")
public class ArtworkEntity extends BaseEntity {
    private String name;

    private BigDecimal price;

    private Double length;

    private Double width;

    private Double thickness;

    private Integer quantity;

    @ManyToOne
    @JoinColumn(name="category_id")
    private CategoryEntity category;

    private String thumbnailUrl;

    @ElementCollection
    private List<String> albumUrls;
}
