package com.saatchiart.server.apis;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.saatchiart.server.Ultils.UploadImage;
import com.saatchiart.server.dto.ArtworkCatDTO;
import com.saatchiart.server.dto.ArtworkDTO;
import com.saatchiart.server.dto.ListDTO;
import com.saatchiart.server.service.impl.ArtworkService;


@RestController
@RequestMapping(value = "/api/artwork")
public class ArtworkApi {

    @Autowired
    private ArtworkService artworkService;

    @GetMapping
    public ApiResponse<ListDTO<ArtworkCatDTO>> getArtwork(@RequestParam(value="page",required = false) Integer page,
                                    @RequestParam(value="limit",required = false) Integer limit) throws IOException{
        ListDTO<ArtworkCatDTO> dataApi = new ListDTO<ArtworkCatDTO>();
        if (page != null && limit != null) {
			dataApi.setPage(page);
			Pageable pageable = PageRequest.of(page - 1, limit);
			dataApi.setListResult(artworkService.findAll(pageable));
			dataApi.setTotalPage((int) Math.ceil((double) (artworkService.totalItem()) / limit));
		} else {
			dataApi.setListResult(artworkService.findAll());
		}
        ApiResponse<ListDTO<ArtworkCatDTO>> result = new ApiResponse<>("Success", HttpStatus.OK, dataApi);
		return result;
    }

    @PostMapping
    public ArtworkDTO createArtwork(@ModelAttribute ArtworkDTO model, @RequestParam("thumbnail") MultipartFile thumbnail,@RequestParam("album") MultipartFile[] album) throws Exception {
        UploadImage thumbnailUpload = new UploadImage(thumbnail);
        model.setThumbnailUrl(thumbnailUpload.getUrl());
        List<String> urlAlbum = new ArrayList<>();
        for (MultipartFile item : album) {
            UploadImage itemFile = new UploadImage(item);
            urlAlbum.add(itemFile.getUrl());
        }
        model.setAlbumUrls(urlAlbum);
        model.setId(null);
        return artworkService.save(model);
    }
    @PutMapping(value="{id}")
    public ArtworkDTO updateArtwork(@ModelAttribute ArtworkDTO model, @RequestParam("thumbnail") MultipartFile thumbnail,@RequestParam("album") MultipartFile[] album,@PathVariable(value = "id") String id) throws Exception {
        try {
            Long idAw = Long.parseLong(id);
            model.setId(idAw);
            UploadImage thumbnailUpload = new UploadImage(thumbnail);
            model.setThumbnailUrl(thumbnailUpload.getUrl());
            List<String> urlAlbum = new ArrayList<>();
            for (MultipartFile item : album) {
                UploadImage itemFile = new UploadImage(item);
                urlAlbum.add(itemFile.getUrl());
            }
            model.setAlbumUrls(urlAlbum);
            model.setId(idAw);
        } catch (Exception e) {
            throw new Exception("Không tồn tại tranh");
        }
        return artworkService.save(model);
    }
    @DeleteMapping
    public ApiResponse<Map<String,Integer>> deleteArtwork(@RequestBody long[] ids){
        Map<String,Integer> dataApi =  new HashMap<>();
        int countDeleted = artworkService.delete(ids);
        dataApi.put("countDeleted",countDeleted);
        ApiResponse<Map<String,Integer>> result = new ApiResponse<>("Success", HttpStatus.OK, dataApi); 
        return result;
    }
}
