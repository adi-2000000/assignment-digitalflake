package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Category;
import com.example.demo.Entity.EmailDTO;
import com.example.demo.Entity.IdDTO;
import com.example.demo.Entity.Product;
import com.example.demo.Service.CategoryService;

@RestController
@CrossOrigin(origins = "http://localhost:5174")

public class CategoryController {
	
	@Autowired
	CategoryService ser;
	
	
	@Autowired
	JavaMailSender javamailsender;
	
	@PostMapping("/saveCategory")
	public ResponseEntity<String> saveCategory(@RequestBody Category category){
		System.out.println(category);
	ser.saveCategory(category);
		 return ResponseEntity.ok("Successfully added product with image");
	}
	
	
	@GetMapping("/getAllCategory")
	public List<Category> getAllCategory(){
	return ser.getAllCategory();	
	}
	
	
	@PostMapping("/deleteCategoryById")
	public ResponseEntity<String> deleteCategory(@RequestBody IdDTO ids){
		long id =  ids.getId();
		int newid = (int) id;
		ser.deleteCategory(newid);
		 return ResponseEntity.ok("deleted ");
	}
	@PostMapping("/getCotegoryById")
	public Category getProductById(@RequestBody IdDTO ids) {
		long id =  ids.getId();
		int newid = (int) id;
	Category category  = ser.getCategoryById(newid);
		if(category!=null) {
			return category;
		}else {
			return null;
		}
	}
	
	
	@PostMapping("/updatecotegory")
    public ResponseEntity<String> updateProduct(@RequestBody Category category) {
	
		Category categorys= ser.getCategoryById(category.getId());
		categorys.setDescription(category.getDescription());
		categorys.setId(category.getId());
		categorys.setName(category.getName());
		categorys.setStatus(category.getStatus());
		ser.saveCategory(categorys);
        return ResponseEntity.ok("Successfully updated ");
    }
	
	
	 @PostMapping("/sendEmail")
	    public ResponseEntity<String>  sendEmail(@RequestBody EmailDTO email) {
	        SimpleMailMessage message = new SimpleMailMessage();
	        message.setTo(email.getEmail());
	        message.setSubject("Test Email from Spring Boot");
	        message.setText("This is a test email sent from a Spring Boot application.");

	        javamailsender.send(message);

	       
	        return ResponseEntity.ok("mail sent ");
	    }
	
	

}
