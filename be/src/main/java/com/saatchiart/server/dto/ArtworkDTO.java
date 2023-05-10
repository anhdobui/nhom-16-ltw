package com.saatchiart.server.dto;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ArtworkDTO extends ArtworkBaseDTO{
    private Long categoryid;

    @Override
    public String toString(){
        return this.getId() + " " + this.getName()+ " " + this.getCategoryid() ;
    }
}
