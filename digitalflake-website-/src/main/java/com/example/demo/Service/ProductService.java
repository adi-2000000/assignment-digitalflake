package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Product;

import com.example.demo.Repository.ProductRepo;


@Service
public class ProductService {
	
	@Autowired
	ProductRepo productrepo;
	
	public void SaveProduct(Product product) {
		productrepo.save(product);
	}
	
	
	public Product findByProductId(long id) {
		return productrepo.findById(id).get();
	}
	
	public void DeleteProduct(Long id) {
		Product product=findByProductId(id);
		productrepo.delete(product);
	}
	
	
	public List<Product> getCategory(){
	return productrepo.findDistinctCategory();	
	}
	
	
	public List<Product> getallproduct(){
		return productrepo.findAll();
	}
    
	
	
	
	

	
	

}
