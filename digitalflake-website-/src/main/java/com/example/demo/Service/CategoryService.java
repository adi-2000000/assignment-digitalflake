package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Category;
import com.example.demo.Repository.CategoryRepo;

@Service
public class CategoryService {

    @Autowired	
	CategoryRepo repo;
	
    @Autowired 
	   private JavaMailSender javaMailSender;
    
    public void saveCategory(Category category) {
    	repo.save(category);
    }
    
    public List<Category> getAllCategory(){
    	return repo.findAll();
    }
    
    public Category getCategoryById(int id) {
    	return repo.findById(id).get();
    }
    
    public void deleteCategory(int id) {
    	repo.delete(getCategoryById(id));
    }
    
    
   
	
	
	
	 public void sendEmail(String to, String subject, String body) {
	        SimpleMailMessage message = new SimpleMailMessage();
	        message.setTo(to);
	        message.setSubject(subject);
	        message.setText(body);

	        javaMailSender.send(message);
	    }
	
}
