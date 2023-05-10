package com.saatchiart.server.dto;

import java.util.ArrayList;
import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ListDTO<T> {
    private int page;
    private int totalPage;
    private List<T> listResult = new ArrayList<>();
}
