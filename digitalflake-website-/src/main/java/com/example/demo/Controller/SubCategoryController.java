package com.example.demo.Controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.Entity.IdDTO;

import com.example.demo.Entity.SubCategory;
import com.example.demo.Repository.SubCategoryRepo;
import com.example.demo.Service.SubCategoryService;

@RestController
@CrossOrigin(origins = "http://localhost:5174")
public class SubCategoryController {
	
	
	@Autowired
	
	SubCategoryService subcategoryservice;
	
	
	@Autowired
	
	private SubCategoryRepo subcategoryrepo;
	

	@PostMapping("/savesubcategory")
	public ResponseEntity<String> saveCategoryWithImage(
	    @RequestParam("image") MultipartFile file,
	    @RequestParam("subcategoryname") String subcategoryname,
	    @RequestParam("categoryname") String categoryname,
	    @RequestParam("status") int status) {
	    try {
	        SubCategory subCategory = new SubCategory();
	        subCategory.setSubcategoryname(subcategoryname);
	        subCategory.setCategoryname(categoryname);
	        subCategory.setStatus(status);

	        // Set the image bytes to the SubCategory entity
	        subCategory.setImage(file.getBytes());

	        // Save the subcategory with image
	        subcategoryservice.SaveSubCategory(subCategory);

	        return ResponseEntity.ok("Successfully added subcategory with image");
	    } catch (IOException e) {
	        e.printStackTrace();
	        return ResponseEntity.status(500).body("Error adding subcategory with image");
	    }
	}

	
	@GetMapping("/getbysubcategory")
	public List<SubCategory> getByCategory(){
		List<SubCategory> subcategory=subcategoryservice.getCategory();
		return  subcategory;
	}
	
//	
//	@GetMapping("/getallsubcategory")
//	public List<SubCategory> getAllSubCategory(){
//		List<SubCategory> subcategory=subcategoryservice.getallsubcategory();
//		return subcategory;
//	}
//	
	
	
	@PostMapping("/deletesubcategorybyid")
	public ResponseEntity<String> deleteSubCategoryById(@RequestBody IdDTO iddto) {
		System.out.println(iddto);
	   subcategoryservice.DeleteSubCategory(iddto.getId());
	    return ResponseEntity.ok("Successfully deleted SubCategory");
	}
	
	
	
	@PostMapping("/getSubCategoryById")
	public SubCategory getSubCategoryById(@RequestBody IdDTO id) {
		SubCategory subcategory  = subcategoryservice.findBySubCategoryId(id.getId());
		if(subcategory!=null) {
			return subcategory;
		}else {
			return null;
		}
	}
	
	
	
	   @PostMapping("/updateSubCategory")
	    public ResponseEntity<String> updateSubCategory(
	            @RequestParam("id") Long id,
	            @RequestParam("subcategoryname") String subcategoryname,
	            @RequestParam("categoryname") String categoryname,
	            @RequestParam("status") int status,
	            @RequestParam(value = "image", required = false) MultipartFile image) {
	        try {
	            SubCategory existingSubCategory = subcategoryservice.findBySubCategoryId(id);
	            if (existingSubCategory != null) {
	                existingSubCategory.setCategoryname(categoryname);
	                existingSubCategory.setSubcategoryname(subcategoryname);
	                existingSubCategory.setStatus(status);
	                
	                if (image != null) {
	                    existingSubCategory.setImage(image.getBytes());
	                }

	                subcategoryservice.SaveSubCategory(existingSubCategory);
	                return ResponseEntity.ok("Successfully updated SubCategory");
	            } else {
	                return ResponseEntity.status(404).body("SubCategory not found");
	            }
	        } catch (Exception e) {
	            return ResponseEntity.status(500).body("Error updating SubCategory: " + e.getMessage());
	        }
	    }
	
	@GetMapping("/getallsubcategory")
	public List<SubCategory> getAllSubCategory(){
		
		return subcategoryrepo.findAll()  ;
	}
	@PutMapping
	public void SaveSubCategory(SubCategory subcategory) {
		subcategoryrepo.save(subcategory);
	}

}
