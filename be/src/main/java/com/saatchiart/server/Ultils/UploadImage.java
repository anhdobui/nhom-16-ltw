package com.saatchiart.server.Ultils;

import java.awt.image.BufferedImage;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import javax.imageio.ImageIO;

import org.springframework.core.io.ClassPathResource;
import org.springframework.web.multipart.MultipartFile;

public class UploadImage {
    public static final Path CURRENT_FOLDER = Paths.get(System.getProperty("user.dir"));
    private MultipartFile image;
    private String url;
    public UploadImage(MultipartFile image) throws Exception {
        this.image = image;
        upload();
    }
    private boolean checkFile() throws IOException{
        if (!image.isEmpty()) {
            try (InputStream inputStream = image.getInputStream()) {
                BufferedImage bufferedImage = ImageIO.read(inputStream);
                if (bufferedImage == null) {
                    return false;
                }
            }
        }
        return true;
    }
    private void upload() throws Exception{
        if(checkFile()){
            Path staticPath = Paths.get("upload");
            Path imagePath = Paths.get("images");
            if (!Files.exists(CURRENT_FOLDER.resolve(staticPath).resolve(imagePath))) {
                Files.createDirectories(CURRENT_FOLDER.resolve(staticPath).resolve(imagePath));
            }
            Path file = CURRENT_FOLDER.resolve(staticPath)
                .resolve(imagePath).resolve(image.getOriginalFilename());
            try (OutputStream os = Files.newOutputStream(file)) {
            os.write(image.getBytes());
            }
        }else{
            throw new Exception("File tải lên không phải là định dạng của ảnh");
        }
        
    }
    public String getUrl(){
        this.url = "/images/" + image.getOriginalFilename();
        return url;
    }
    
}
