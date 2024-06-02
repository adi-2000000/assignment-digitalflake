package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Product;
import com.example.demo.Entity.SubCategory;
import com.example.demo.Repository.SubCategoryRepo;

@Service
public class SubCategoryService {
	
	
	@Autowired
	
	SubCategoryRepo subcategoryrepo;
	
	
	
	public void SaveSubCategory(SubCategory subcategory) {
		subcategoryrepo.save(subcategory);
	}
	
	public SubCategory findBySubCategoryId(long id) {
		return subcategoryrepo.findById(id).get();
	}
	
	
	public void DeleteSubCategory(Long id) {
		SubCategory subcategory=findBySubCategoryId(id);
		subcategoryrepo.delete(subcategory);
	}
	
	
	public List<SubCategory> getCategory(){
		return subcategoryrepo.findDistinctCategory();	
		}

	public List<SubCategory> getAllSubCategory() {
		// TODO Auto-generated method stub
		return null;
	}

	public List<SubCategory> getallsubcategory() {
		// TODO Auto-generated method stub
		return null;
	}
	

}
