package com.saatchiart.server.apis;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.saatchiart.server.dto.CategoryAwDTO;
import com.saatchiart.server.dto.CategoryDTO;
import com.saatchiart.server.dto.ListDTO;
import com.saatchiart.server.service.impl.CategoryService;

@RestController
@RequestMapping(value = "/api/category")
public class CategoryApi {
    @Autowired
    private CategoryService categoryService;

    @GetMapping
    public ApiResponse<ListDTO<CategoryDTO>> getCategory(@RequestParam(value="page",required = false) Integer page,
                                    @RequestParam(value="limit",required = false) Integer limit){
        ListDTO<CategoryDTO>  dataApi = new ListDTO<CategoryDTO>();
        if(page != null && limit != null){
            dataApi.setPage(page);
            Pageable pageable = PageRequest.of(page-1, limit);
            dataApi.setListResult(categoryService.findAll(pageable));
            dataApi.setTotalPage((int) Math.ceil((double) (categoryService.totalItem()) / limit));
        }else{
            dataApi.setListResult(categoryService.findAll());
        }   
        ApiResponse<ListDTO<CategoryDTO>> result = new ApiResponse<>("Success", HttpStatus.OK, dataApi);                  
        return result;                           
    }

    @PostMapping
    public CategoryDTO createCategory(@RequestBody CategoryDTO model) throws Exception{
        model.setId(null);
        return categoryService.save(model);
    }
    @PutMapping(value="{id}")
    public CategoryDTO updateCategory(@RequestBody CategoryDTO model,@PathVariable(value = "id") String id) throws Exception {
        try {
            Long idCat = Long.parseLong(id);
            model.setId(idCat);
        } catch (Exception e) {
            throw new Exception("Không tồn tại tập tranh");
        }
        return categoryService.save(model);
    }
    @DeleteMapping
    public ApiResponse<Map<String,Integer>> deleteCategory(@RequestBody long[] ids){
        Map<String,Integer> dataApi =  new HashMap<>();
        int countDeleted = categoryService.delete(ids);
        dataApi.put("countDeleted",countDeleted);
        ApiResponse<Map<String,Integer>> result = new ApiResponse<>("Success", HttpStatus.OK, dataApi); 
        return result;
    }
}
