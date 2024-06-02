package com.example.demo.Entity;

import java.util.Arrays;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;

@Entity
public class SubCategory {
   
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY )
	
	
	private Long id;
	private String subcategoryname;

	private String categoryname;

	@Lob
	@Column(name = "image", columnDefinition = "BLOB")
	private byte[] image;
	private Integer status;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getSubcategoryname() {
		return subcategoryname;
	}
	public void setSubcategoryname(String subcategoryname) {
		this.subcategoryname = subcategoryname;
	}
	public String getCategoryname() {
		return categoryname;
	}
	public void setCategoryname(String categoryname) {
		this.categoryname = categoryname;
	}
	public byte[] getImage() {
		return image;
	}
	public void setImage(byte[] image) {
		this.image = image;
	}
	public Integer getStatus() {
		return status;
	}
	public void setStatus(Integer status) {
		this.status = status;
	}
	@Override
	public String toString() {
		return "SubCategory [id=" + id + ", subcategoryname=" + subcategoryname + ", categoryname=" + categoryname
				+ ", image=" + Arrays.toString(image) + ", status=" + status + "]";
	}
	public SubCategory() {
		super();
		this.id = id;
		this.subcategoryname = subcategoryname;
		this.categoryname = categoryname;
		this.image = image;
		this.status = status;
	}
	public void SaveSubCategory(SubCategory subCategory) {
		// TODO Auto-generated method stub
		
	}
	
	
}
